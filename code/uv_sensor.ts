// @ts-nocheck
// Reads a GUVA-S12SD ultraviolet (UV) sensor and estimates the UV index.
// UV index 0-2 is low, 3-5 moderate, 6-7 high, 8-10 very high, 11+ extreme.
// Great for wearable projects: when should you reapply sunscreen?
//
// Analog read: the sensor outputs a voltage proportional to UV intensity.
// We map the 0-1023 reading to an approximate UV index of 0-11.
//
// Physical setup:
//   Sensor has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND
//   Point the sensor window toward the sky or a UV light source.

// --- Setup ---
let uvReading = 0;
let uvIndex = 0;
basic.showString("UV");

// --- Main Loop ---
basic.forever(function () {
  uvReading = pins.analogReadPin(AnalogPin.P0);
  // Map sensor range to approximate UV index (0-11)
  uvIndex = Math.round(Math.map(uvReading, 0, 1023, 0, 11));
  // Show the UV index number on the LED screen
  basic.showNumber(uvIndex);
  serial.writeValue("raw", uvReading);
  serial.writeValue("uvIndex", uvIndex);
  basic.pause(1000);
});
