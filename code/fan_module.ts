// @ts-nocheck
// Controls an L9110 fan module — a small motor with a propeller that blows air.
// Most outputs are visual (LEDs) or audible (buzzer). A fan gives physical,
// tactile feedback — you can FEEL the output on your skin.
//
// Button A turns the fan on, Button B turns it off.
//
// Physical setup:
//   Fan module has 4 pins: INA, INB, VCC, GND.
//   Connect INA → micro:bit pin 0
//   Connect INB → micro:bit pin 1
//   Connect VCC → battery pack positive (5V recommended, 3V may be too weak)
//   Connect GND → micro:bit GND (and battery pack negative)
//   Important: use the 6xAA battery pack for enough power to spin the fan.

// --- Setup ---
let fanOn = false;
basic.showIcon(IconNames.Target);
// Make sure fan starts off
pins.digitalWritePin(DigitalPin.P0, 0);
pins.digitalWritePin(DigitalPin.P1, 0);

// --- Event Handlers ---
// Button A: turn fan on
input.onButtonPressed(Button.A, function () {
  fanOn = true;
  pins.digitalWritePin(DigitalPin.P0, 1);
  pins.digitalWritePin(DigitalPin.P1, 0);
  basic.showIcon(IconNames.SmallSquare);
  serial.writeLine("Fan ON");
});

// Button B: turn fan off
input.onButtonPressed(Button.B, function () {
  fanOn = false;
  pins.digitalWritePin(DigitalPin.P0, 0);
  pins.digitalWritePin(DigitalPin.P1, 0);
  basic.showIcon(IconNames.Target);
  serial.writeLine("Fan OFF");
});
