// @ts-nocheck
// Reads an analog alcohol sensor (MQ-3) that detects alcohol vapor in the air.
// The bar graph gets taller as alcohol concentration increases.
// Try holding hand sanitizer or rubbing alcohol near the sensor.
//
// Analog read: 0 = clean air, higher values = more alcohol vapor detected.
// The sensor needs about 20 seconds to warm up before readings stabilize.
//
// Physical setup:
//   Sensor has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 5V (use battery pack — this sensor needs 5V)
//   Connect G → micro:bit GND
//   Important: the sensor has a small heater inside and gets warm. This is normal.

// --- Setup ---
let alcoholReading = 0;
basic.showString("ALC");
// Give sensor time to warm up
basic.pause(3000);
basic.showIcon(IconNames.SmallHeart);

// --- Main Loop ---
basic.forever(function () {
  alcoholReading = pins.analogReadPin(AnalogPin.P0);
  led.plotBarGraph(alcoholReading, 1023);
  serial.writeValue("alcohol", alcoholReading);
  basic.pause(500);
});
