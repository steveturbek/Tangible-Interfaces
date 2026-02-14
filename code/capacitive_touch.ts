// @ts-nocheck
// Detects touch using a capacitive touch sensor — no mechanical button needed.
// Any conductive surface (metal, fruit, foil, water, skin) can become a touch input.
// Touching the sensor pad lights up the LED screen and plays a tone.
//
// Digital read: 1 = touched, 0 = not touched.
//
// Physical setup:
//   Sensor has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND
//   You can attach a wire to the sensor pad to extend the touch area.

// --- Setup ---
let isTouched = 0;
basic.showIcon(IconNames.Heart);

// --- Main Loop ---
basic.forever(function () {
  isTouched = pins.digitalReadPin(DigitalPin.P0);
  if (isTouched == 1) {
    basic.showIcon(IconNames.Diamond);
    music.play(
      music.tonePlayable(523, music.beat(BeatFraction.Eighth)),
      music.PlaybackMode.InBackground,
    );
    serial.writeLine("Touched!");
  } else {
    basic.showIcon(IconNames.SmallDiamond);
    serial.writeLine("Not touched");
  }
  basic.pause(100);
});
