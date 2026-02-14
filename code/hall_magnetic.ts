// @ts-nocheck
// Detects a nearby magnet using a Hall effect magnetic sensor.
// Magnets can be hidden inside objects, behind walls, or under surfaces
// to create invisible triggers — no visible button or switch needed.
//
// Digital read: 1 = magnet detected (within ~3cm), 0 = no magnet.
// Try taping a small magnet to a game piece, box lid, or sliding panel.
//
// Physical setup:
//   Sensor has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND
//   Hold a magnet close to the sensor face to trigger it.

// --- Setup ---
let magnetDetected = 0;
basic.showIcon(IconNames.No);

// --- Main Loop ---
basic.forever(function () {
  magnetDetected = pins.digitalReadPin(DigitalPin.P0);
  if (magnetDetected == 1) {
    basic.showIcon(IconNames.Yes);
    music.play(
      music.tonePlayable(784, music.beat(BeatFraction.Eighth)),
      music.PlaybackMode.InBackground,
    );
    serial.writeLine("Magnet detected!");
  } else {
    basic.showIcon(IconNames.No);
    serial.writeLine("No magnet");
  }
  basic.pause(100);
});
