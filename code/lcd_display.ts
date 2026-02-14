// @ts-nocheck
// Displays text and numbers on a 1602 LCD screen (2 rows of 16 characters).
// This classic display is on microwaves, thermostats, and vending machines.
// Great for showing sensor readings or status messages.
//
// MakeCode extension required:
//   In the MakeCode editor, click "Extensions" and search for "LCD1602".
//   Add the "i2cLCD1602" extension.
//
// Physical setup:
//   The LCD module has 4 pins. It uses I2C, so it must go on specific pins:
//   Connect GND → micro:bit GND
//   Connect VCC → micro:bit 5V (use battery pack — LCD needs 5V for backlight)
//   Connect SCL → micro:bit pin 19 (I2C clock)
//   Connect SDA → micro:bit pin 20 (I2C data)
//   Note: on the sensor shield, just plug into one of the I2C ports.
//   Tip: if the screen looks blank, adjust the blue potentiometer on the back.

// --- Setup ---
// Address 0 means auto-detect. Try 39 or 63 if auto doesn't work.
I2C_LCD1602.LcdInit(0);
I2C_LCD1602.ShowString("Hello!", 0, 0);
I2C_LCD1602.ShowString("micro:bit LCD", 0, 1);
basic.pause(2000);

// --- Main Loop ---
// Show a counter and temperature that update every second
let count2 = 0;
basic.forever(function () {
  I2C_LCD1602.ShowString("Count: " + count2 + "   ", 0, 0);
  I2C_LCD1602.ShowString("Temp: " + input.temperature() + "C ", 0, 1);
  count2 += 1;
  serial.writeValue("count", count2);
  basic.pause(1000);
});
