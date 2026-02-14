// @ts-nocheck
// Reads an external push button and shows its state on the LED screen.
// This is the simplest possible digital sensor — just on or off.
// Use this pattern any time you want a physical button that is separate
// from the micro:bit's built-in A and B buttons.
//
// Digital read: 1 = button pressed, 0 = button released.
//
// Physical setup:
//   Button module has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND

// --- Setup ---
let buttonState = 0;
basic.showIcon(IconNames.SmallDiamond);

// --- Main Loop ---
basic.forever(function () {
  buttonState = pins.digitalReadPin(DigitalPin.P0);
  if (buttonState == 1) {
    basic.showIcon(IconNames.Diamond);
    serial.writeLine("Button pressed");
  } else {
    basic.showIcon(IconNames.SmallDiamond);
    serial.writeLine("Button released");
  }
  basic.pause(100);
});
