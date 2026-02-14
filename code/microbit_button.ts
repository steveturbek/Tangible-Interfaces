// @ts-nocheck
// The simplest Microbit program: shows a number on the 25 LEDs.
// Button B increases the value, Button A decreases the value.
// No external wiring needed — just the micro:bit itself.

// --- Setup ---
let value = 0;
basic.showNumber(value);

// --- Button Handlers ---
input.onButtonPressed(Button.B, function () {
  value += 1;
  basic.showNumber(value);
});

input.onButtonPressed(Button.A, function () {
  value -= 1;
  basic.showNumber(value);
});
