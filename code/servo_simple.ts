// @ts-nocheck
// Sweeps a servo motor back and forth from 0 to 180 degrees continuously.
// A basic demo of servo movement on pin P0.

// --- Setup ---
servos.P0.setRange(0, 180);
basic.showIcon(IconNames.Heart);
let direction = 1;
let angle = 0;

// --- Main Loop ---
basic.forever(function () {
  if (angle > 180 || angle < 0) {
    direction = direction * -1;
  }
  angle += direction;
  servos.P0.setAngle(angle);
  serial.writeValue("angle", angle);
});
