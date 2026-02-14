// @ts-nocheck
// Detects human movement using a PIR (passive infrared) motion sensor.
// When motion is detected, the LED screen shows an eye icon and plays a sound.
//
// How it works: the sensor detects body heat moving in front of it.
// Digital read: 1 = motion detected, 0 = no motion.
// The sensor has a ~2 second warm-up time when first powered on.
//
// Physical setup:
//   Sensor has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND

// --- Setup ---
let motionDetected = 0;
basic.showIcon(IconNames.Asleep);

// --- Main Loop ---
basic.forever(function () {
  motionDetected = pins.digitalReadPin(DigitalPin.P0);
  if (motionDetected == 1) {
    basic.showIcon(IconNames.Happy);
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground);
    serial.writeLine("Motion detected!");
  } else {
    basic.showIcon(IconNames.Asleep);
    serial.writeLine("No motion");
  }
  basic.pause(200);
});
