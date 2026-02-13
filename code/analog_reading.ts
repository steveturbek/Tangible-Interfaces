// @ts-nocheck
// Reads an analog sensor on pin P0 and displays the value as a bar graph
// on the LED screen. Logs the raw value and percentage over serial.

// --- Setup ---
let AnalogReading = 0;
basic.showIcon(IconNames.Yes);

// --- Main Loop ---

basic.forever(function () {
  AnalogReading = pins.analogReadPin(AnalogPin.P0);
  led.plotBarGraph(AnalogReading, 1023);
  serial.writeLine("Analog Reading" + AnalogReading + "|" + Math.map(AnalogReading, 0, 1023, 0, 99) + "%");
});
