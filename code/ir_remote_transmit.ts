// @ts-nocheck
// Send IR commands to control a TV using the micro:bit buttons.
//   Button A = Volume Down
//   Button B = Volume Up
//   A+B together = Power On/Off
//
// NOTE: The IR codes below are common NEC protocol values for generic TVs.
//   Your TV may use different codes! To find the right hex codes:
//   1. Load ir_remote_reader.ts, point your TV remote at the IR receiver,
//      and press buttons — the hex codes appear in the serial monitor.
//   2. Or google your TV brand + "IR codes NEC hex".
//   Then update the values in the Setup section below.
//
// MakeCode extensions required:
//   In the MakeCode editor, click "Extensions" and search for "makerbit-ir".
//   Add the "MakerBit IR Transmitter" extension.
//
// Physical setup — IR transmitter LED:
//   Connect signal → micro:bit pin 1
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND
//   Point the IR transmitter LED at your TV when sending commands.

// --- Setup ---
// Connect IR transmitter on pin 1
makerbit.connectIrSenderLed(AnalogPin.P1);

// IR codes — update these for your specific TV!
// These are common NEC protocol codes; google "[your TV brand] IR hex codes"
let IR_POWER = "00FF02FD";
let IR_VOL_UP = "00FF18E7";
let IR_VOL_DOWN = "00FF4AB5";

basic.showIcon(IconNames.Target);

// --- Event Handlers ---
// Button A: Volume Down
input.onButtonPressed(Button.A, function () {
  makerbit.sendIrDatagram(IR_VOL_DOWN);
  basic.showString("-");
  serial.writeLine("Sent: Volume Down");
  basic.pause(300);
  basic.showIcon(IconNames.Target);
});

// Button B: Volume Up
input.onButtonPressed(Button.B, function () {
  makerbit.sendIrDatagram(IR_VOL_UP);
  basic.showString("+");
  serial.writeLine("Sent: Volume Up");
  basic.pause(300);
  basic.showIcon(IconNames.Target);
});

// A+B together: Power On/Off
input.onButtonPressed(Button.AB, function () {
  makerbit.sendIrDatagram(IR_POWER);
  basic.showIcon(IconNames.Square);
  serial.writeLine("Sent: Power Toggle");
  basic.pause(500);
  basic.showIcon(IconNames.Target);
});
