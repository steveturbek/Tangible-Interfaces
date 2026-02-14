# Local Jekyll Setup (macOS)

to build site locally and run put in terminal in VS Code

```
bundle exec jekyll serve --incremental & sleep 2 && open -a "Google Chrome" http://localhost:4000/tangible-interfaces/
```

## local Code synch with microbit

makecode has an API that uses the share ID
https://makecode.microbit.org/api/S03522-41298-89839-41752/text

it retuns a JSON object
the code is in the "main.ts"

synch-check to compare local files to makecode

./sync-check.sh # Basic comparison
./sync-check.sh --code-only # Ignore comments, whitespace, semicolons
./sync-check.sh --verbose # Show diffs
./sync-check.sh --code-only --verbose # Best: show only real code changes

## One-Time Setup

### 1. Install Homebrew Ruby and rbenv

```bash
brew install ruby rbenv
```

### 2. Add rbenv to your shell

Add this line to `~/.zshrc`:

```bash
eval "$(rbenv init - zsh)"
```

Then reload:

```bash
source ~/.zshrc
```

### 3. Install Ruby 3.3.7 (compatible with Jekyll)

```bash
rbenv install 3.3.7
```

> **Note:** Ruby 4.0+ is NOT compatible with Jekyll yet. That's why we use rbenv to run 3.3 for this project.

### 4. Set Ruby version for this project

```bash
cd /Users/steveturbek/Documents/tangible-interfaces/tangible-interfaces
rbenv local 3.3.7
```

This creates a `.ruby-version` file so this project always uses 3.3.7.

### 5. Install dependencies

```bash
gem install bundler
bundle install
```

---

## Running the Site Locally

```bash
cd /Users/steveturbek/Documents/tangible-interfaces/tangible-interfaces
bundle exec jekyll serve
```

Your site will be at: **http://localhost:4000/tangible-interfaces/**

Add `--livereload` for auto-refresh on save:

```bash
bundle exec jekyll serve --livereload
```

Press `Ctrl+C` to stop the server.

---

## Troubleshooting

- **Wrong Ruby version?** Run `ruby -v` — it should show 3.3.7. If not, open a new terminal and make sure `eval "$(rbenv init - zsh)"` is in your `~/.zshrc`.
- **`rbenv: command not found`?** Run `brew install rbenv` and restart your terminal.
- **Bundle errors?** Try `rm Gemfile.lock && bundle install`.
