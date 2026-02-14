// @ts-nocheck
// Reads an analog gas sensor (MQ-2) that detects flammable gases and smoke.
// The bar graph gets taller as gas concentration increases.
// Useful for safety projects or environmental monitoring.
//
// Analog read: 0 = clean air, higher values = more gas detected.
// The sensor needs about 20 seconds to warm up before readings stabilize.
//
// Physical setup:
//   Sensor has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 5V (use battery pack — this sensor needs 5V)
//   Connect G → micro:bit GND
//   Important: the sensor has a small heater inside and gets warm. This is normal.

// --- Setup ---
let gasReading = 0;
basic.showString("GAS");
// Give sensor time to warm up
basic.pause(3000);
basic.showIcon(IconNames.SmallHeart);

// --- Main Loop ---
basic.forever(function () {
  gasReading = pins.analogReadPin(AnalogPin.P0);
  led.plotBarGraph(gasReading, 1023);
  serial.writeValue("gas", gasReading);
  basic.pause(500);
});
