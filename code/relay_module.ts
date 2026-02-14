// @ts-nocheck
// Controls a relay module — an electrically operated switch that can turn
// real-world devices on and off. You'll hear a satisfying "click" when it switches.
// A relay lets your micro:bit control things like lamps, fans, or motors
// that need more power than the micro:bit can provide directly.
//
// Button A turns the relay on (click!), Button B turns it off.
// Digital write: 1 = relay ON (closed circuit), 0 = relay OFF (open circuit).
//
// Physical setup:
//   Relay module has 3 low-voltage pins: S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND
//
//   The relay also has screw terminals for the high-voltage side:
//   COM (common), NO (normally open), NC (normally closed).
//   For basic testing, just listen for the click — no need to wire the screw terminals.
//   To control a device: wire it through COM and NO so it turns on when the relay activates.

// --- Setup ---
let relayOn = false;
basic.showIcon(IconNames.Target);
pins.digitalWritePin(DigitalPin.P0, 0);

// --- Event Handlers ---
// Button A: turn relay on
input.onButtonPressed(Button.A, function () {
  relayOn = true;
  pins.digitalWritePin(DigitalPin.P0, 1);
  basic.showIcon(IconNames.Yes);
  serial.writeLine("Relay ON");
});

// Button B: turn relay off
input.onButtonPressed(Button.B, function () {
  relayOn = false;
  pins.digitalWritePin(DigitalPin.P0, 0);
  basic.showIcon(IconNames.No);
  serial.writeLine("Relay OFF");
});
