// @ts-nocheck
// Displays text and numbers on a 0.96" OLED screen (128x64 pixels).
// This tiny screen gives you real visual output beyond the 5x5 LED grid —
// show sensor readings, messages, or simple graphics.
//
// MakeCode extension required:
//   In the MakeCode editor, click "Extensions" and search for "OLED".
//   Add the "OLED_SSD1306" extension by Tinkertanker.
//
// Physical setup:
//   The OLED module has 4 pins. It uses I2C, so it must go on specific pins:
//   Connect GND → micro:bit GND
//   Connect VCC → micro:bit 3V
//   Connect SCL → micro:bit pin 19 (I2C clock)
//   Connect SDA → micro:bit pin 20 (I2C data)
//   Note: on the sensor shield, just plug into one of the I2C ports.

// --- Setup ---
OLED.init(128, 64);
OLED.writeStringNewLine("Hello!");
OLED.writeStringNewLine("micro:bit OLED");
basic.pause(2000);

// --- Main Loop ---
// Show a counter that updates every second
let count = 0;
basic.forever(function () {
  OLED.clear();
  OLED.writeStringNewLine("Count: " + count);
  OLED.writeStringNewLine("Light: " + input.lightLevel());
  OLED.writeStringNewLine("Temp: " + input.temperature() + "C");
  count += 1;
  serial.writeValue("count", count);
  basic.pause(1000);
});
