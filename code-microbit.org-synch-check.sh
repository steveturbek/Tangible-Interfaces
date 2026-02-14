#!/bin/bash
# sync-check.sh — Compare local .ts files with their MakeCode share link versions
#
# Parses code.md to find pairs of (share link, local .ts file),
# fetches the main.ts from the MakeCode API, and diffs against the local copy.
#
# Usage: ./sync-check.sh [--strip-comments] [--code-only] [--verbose]
#
#   --strip-comments  Remove comment lines before comparing
#   --code-only       Normalize whitespace, indentation, and semicolons (find real code changes)
#   --verbose         Show diffs for drifted files

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CODE_MD="$SCRIPT_DIR/code.md"
CODE_DIR="$SCRIPT_DIR/code"

STRIP_COMMENTS=true
CODE_ONLY=true
VERBOSE=false

for arg in "$@"; do
  case "$arg" in
    --strip-comments) STRIP_COMMENTS=true ;;
    --code-only) CODE_ONLY=true; STRIP_COMMENTS=true ;;
    --verbose) VERBOSE=true ;;
  esac
done

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# Counters
total=0
in_sync=0
drifted=0
errors=0

# Normalize code for comparison
# Pipe content through this to apply the selected normalization level
apply_normalize() {
  local input
  input=$(cat)

  # Always remove @ts-nocheck
  input=$(echo "$input" | grep -v '// @ts-nocheck')

  if $STRIP_COMMENTS; then
    # Remove single-line comment lines (// ...) and block comment lines (/* ... */)
    input=$(echo "$input" | sed '/^[[:space:]]*\/\//d' | sed '/^[[:space:]]*\/\*/d' | sed '/^[[:space:]]*\*/d')
  fi

  if $CODE_ONLY; then
    # Normalize indentation (collapse all leading whitespace to single spaces per level)
    # Remove blank lines, trailing whitespace, and optional semicolons
    input=$(echo "$input" \
      | sed 's/^[[:space:]]*//' \
      | sed 's/[[:space:]]*$//' \
      | sed 's/;$//' \
      | sed '/^$/d')
  else
    # Just trim trailing whitespace and collapse repeated blank lines
    input=$(echo "$input" | sed 's/[[:space:]]*$//' | sed '/^$/{ N; /^\n$/d; }')
  fi

  echo "$input"
}

normalize() {
  local file="$1"
  cat "$file" | apply_normalize
}

normalize_string() {
  local content="$1"
  echo "$content" | apply_normalize
}

echo ""
echo -e "${BOLD}MakeCode Sync Check${NC}"
echo -e "Comparing local .ts files with MakeCode share link versions"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Parse code.md to extract (share_id, local_file) pairs
# Look for makecode links followed by include_relative within a few lines
share_ids=()
local_files=()

while IFS= read -r line; do
  # Reset share link when we hit a new section heading (prevents bleeding across sections)
  if [[ "$line" =~ ^###\  ]]; then
    current_share=""
  fi
  # Match share link
  if [[ "$line" =~ makecode\.microbit\.org/(S[0-9-]+) ]]; then
    current_share="${BASH_REMATCH[1]}"
  fi
  # Match include_relative — pair it with the most recent share link in this section
  if [[ "$line" =~ include_relative[[:space:]]+(code/[a-zA-Z0-9_]+\.ts) ]]; then
    local_file="${BASH_REMATCH[1]}"
    if [[ -n "$current_share" ]]; then
      share_ids+=("$current_share")
      local_files+=("$local_file")
      current_share=""
    fi
  fi
done < "$CODE_MD"

if [[ ${#share_ids[@]} -eq 0 ]]; then
  echo -e "${RED}No share link / local file pairs found in code.md${NC}"
  exit 1
fi

echo -e "Found ${BOLD}${#share_ids[@]}${NC} paired entries (share link + local file)"
echo ""

for i in "${!share_ids[@]}"; do
  share_id="${share_ids[$i]}"
  local_file="${local_files[$i]}"
  local_path="$SCRIPT_DIR/$local_file"
  total=$((total + 1))

  name=$(basename "$local_file" .ts)
  echo -ne "  ${CYAN}$name${NC} ... "

  # Check local file exists
  if [[ ! -f "$local_path" ]]; then
    echo -e "${RED}LOCAL FILE MISSING${NC} ($local_file)"
    errors=$((errors + 1))
    continue
  fi

  # Fetch from MakeCode API
  api_url="https://makecode.microbit.org/api/$share_id/text"
  response=$(curl -s --max-time 10 "$api_url" 2>/dev/null)

  if [[ -z "$response" ]]; then
    echo -e "${RED}API FETCH FAILED${NC}"
    errors=$((errors + 1))
    continue
  fi

  # Extract main.ts from JSON response
  remote_code=$(echo "$response" | jq -r '.["main.ts"]' 2>/dev/null)

  if [[ -z "$remote_code" || "$remote_code" == "null" ]]; then
    echo -e "${RED}NO main.ts IN RESPONSE${NC}"
    errors=$((errors + 1))
    continue
  fi

  # Compare
  local_normalized=$(normalize "$local_path")
  remote_normalized=$(normalize_string "$remote_code")

  if [[ "$local_normalized" == "$remote_normalized" ]]; then
    echo -e "${GREEN}IN SYNC${NC}"
    in_sync=$((in_sync + 1))
  else
    echo -e "${YELLOW}DRIFTED${NC}"
    drifted=$((drifted + 1))

    if $VERBOSE; then
      echo ""
      # Show a short diff
      diff_output=$(diff <(echo "$remote_normalized") <(echo "$local_normalized") | head -30)
      echo -e "    ${BOLD}Diff (remote → local):${NC}"
      echo "$diff_output" | while IFS= read -r dline; do
        if [[ "$dline" == "<"* ]]; then
          echo -e "    ${RED}$dline${NC}"
        elif [[ "$dline" == ">"* ]]; then
          echo -e "    ${GREEN}$dline${NC}"
        else
          echo "    $dline"
        fi
      done
      echo ""
    fi
  fi
done

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${BOLD}Summary:${NC} $total checked"
[[ $in_sync -gt 0 ]] && echo -e "  ${GREEN}$in_sync in sync${NC}"
[[ $drifted -gt 0 ]] && echo -e "  ${YELLOW}$drifted drifted${NC}"
[[ $errors  -gt 0 ]] && echo -e "  ${RED}$errors errors${NC}"
echo ""

# Also report entries that have local .ts but NO share link
echo -e "${BOLD}Local .ts files without a share link:${NC}"
has_unlinked=false
for ts_file in "$CODE_DIR"/*.ts; do
  ts_basename=$(basename "$ts_file")
  ts_relative="code/$ts_basename"
  found=false
  for lf in "${local_files[@]}"; do
    if [[ "$lf" == "$ts_relative" ]]; then
      found=true
      break
    fi
  done
  if ! $found; then
    echo -e "  ${YELLOW}$ts_basename${NC} — no MakeCode share link in code.md"
    has_unlinked=true
  fi
done
if ! $has_unlinked; then
  echo -e "  ${GREEN}(none — all local files have share links)${NC}"
fi

echo ""
