// @ts-nocheck
// Reads temperature and humidity from a DHT11 sensor and shows them on the LED screen.
// One sensor gives you two readings — the core of every smart thermostat or weather station.
// Alternates between showing temperature (C) and humidity (%).
//
// Note: this program requires a MakeCode extension.
//   In the MakeCode editor, click "Extensions" and search for "DHT11".
//   Add the "DHT11_DHT22" extension by Alan Krantas.
//
// Physical setup:
//   Sensor has 3 pins labeled S (signal), V (power), G (ground).
//   Connect S → micro:bit pin 0
//   Connect V → micro:bit 3V
//   Connect G → micro:bit GND
//   Important: wait at least 1 second between readings (the sensor is slow).

// --- Setup ---
let temperature = 0;
let humidity = 0;
basic.showString("DHT");

// --- Main Loop ---
basic.forever(function () {
  // Read the sensor (must call this before reading temperature or humidity)
  dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P0, true, false, true);
  // Get the readings
  temperature = dht11_dht22.readData(dataType.temperature);
  humidity = dht11_dht22.readData(dataType.humidity);
  // Show temperature
  basic.showString("T");
  basic.showNumber(temperature);
  basic.pause(1000);
  // Show humidity
  basic.showString("H");
  basic.showNumber(humidity);
  basic.pause(1000);
  // Log to serial
  serial.writeValue("tempC", temperature);
  serial.writeValue("humidity", humidity);
});
