// @ts-nocheck
// Reads a thin-film pressure (force) sensor and displays how hard you're pressing.
// Unlike a button (on/off), this sensor gives an analog value — it knows HOW MUCH
// force is applied. Squeeze harder = higher reading.
//
// Use cases: squeeze toys, sit-on sensors, footstep detection, grip strength.
// Analog read: 0 = no pressure, up to 1023 = maximum force.
//
// Physical setup:
//   Sensor has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND
//   Press the round film area with your finger to see values change.

// --- Setup ---
let forceReading = 0;
basic.showIcon(IconNames.SmallHeart);

// --- Main Loop ---
basic.forever(function () {
  forceReading = pins.analogReadPin(AnalogPin.P0);
  led.plotBarGraph(forceReading, 1023);
  serial.writeValue("force", forceReading);
  serial.writeValue("percent", Math.round(Math.map(forceReading, 0, 1023, 0, 100)));
  basic.pause(100);
});
