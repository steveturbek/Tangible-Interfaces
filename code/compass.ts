// @ts-nocheck
// Reads the micro:bit's built-in compass and displays an arrow on the LED screen
// pointing in the compass direction (N, NE, E, SE, S, SW, W, NW).

// --- Setup ---
let angle = 0;
basic.showIcon(IconNames.Triangle);
input.calibrateCompass();

// --- Main Loop ---
basic.forever(function () {
  angle = input.compassHeading();
  if ((angle >= 0 && angle < 45) || angle >= 360) {
    basic.showArrow(ArrowNames.North);
  } else if (angle >= 45 && angle < 90) {
    basic.showArrow(ArrowNames.NorthWest);
  } else if (angle >= 90 && angle < 135) {
    basic.showArrow(ArrowNames.West);
  } else if (angle >= 135 && angle < 180) {
    basic.showArrow(ArrowNames.SouthWest);
  } else if (angle >= 180 && angle < 225) {
    basic.showArrow(ArrowNames.South);
  } else if (angle >= 225 && angle < 270) {
    basic.showArrow(ArrowNames.SouthEast);
  } else if (angle >= 270 && angle < 315) {
    basic.showArrow(ArrowNames.East);
  } else if (angle >= 315 && angle < 360) {
    basic.showArrow(ArrowNames.NorthEast);
  } else {
  }
  serial.writeValue("x", angle);
  basic.pause(100);
});
