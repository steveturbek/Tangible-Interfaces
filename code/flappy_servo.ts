// @ts-nocheck
// Steers a servo motor up and down using buttons A and B.
// A simple demo of using buttons to control physical output.

// --- Event Handlers ---
// Button A moves the servo up
input.onButtonPressed(Button.A, function () {
  if (birdY < maxY) {
    birdY += 10;
  }
});
// Button B moves the servo down
input.onButtonPressed(Button.B, function () {
  if (birdY > minY) {
    birdY += -10;
  }
});
// --- Setup ---
let minY = 0;
let maxY = 0;
let birdY = 0;
birdY = 100;
maxY = 180;
minY = 0;
servos.P0.setRange(minY, maxY);
// --- Main Loop ---
basic.forever(function () {
  servos.P0.setAngle(birdY);
  basic.pause(200);
});
