// @ts-nocheck
// Reads button presses from the included IR remote control (or any IR remote).
// Point any remote at the IR receiver and press buttons — the micro:bit shows
// which button was pressed. Use this to decode your TV or AC remote's signals.
//
// MakeCode extension required:
//   In the MakeCode editor, click "Extensions" and search for "makerbit-ir".
//   Add the "MakerBit IR Receiver" extension by 1010Technologies.
//
// Physical setup:
//   IR receiver module has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND
//   Point the IR remote directly at the receiver module (line of sight).

// --- Setup ---
// Connect IR receiver on pin 0 using Keyestudio protocol
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio);
basic.showIcon(IconNames.SmallDiamond);

// --- Event Handlers ---
// This runs every time any IR button is pressed.
// The IR remote sends a 32-bit datagram (address + command + error-check bytes).
// irDatagram() returns the full 32-bit hex code as a string like "0x00FF02FD".
// Copy the hex value from the serial monitor and paste it into ir_control_devices.ts
// (remove the "0x" prefix, e.g. "0x00FF02FD" becomes "00FF02FD").
//
// Common codes for the included Keyestudio remote:
//   Power=0xFF02FD, Vol+=0xFF18E7, Vol-=0xFF4AB5
makerbit.onIrDatagram(function () {
  let hex = makerbit.irDatagram();
  basic.showString("IR");
  serial.writeLine("IR hex: " + hex);
});
