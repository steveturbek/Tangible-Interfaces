// @ts-nocheck
// Controls a servo motor position using an analog sensor input.
// The sensor reading on P1 is mapped to a servo angle on P0.

// --- Setup ---
let servo = 0;
basic.showIcon(IconNames.SmallHeart);
serial.redirectToUSB();
// --- Main Loop ---
basic.forever(function () {
  servo = Math.map(pins.analogReadPin(AnalogReadWritePin.P1), 0, 2, 0, 10);
  led.plotBarGraph(servo, 180);
  pins.servoWritePin(AnalogPin.P0, servo);
  serial.writeLine("" + servo);
});
