// @ts-nocheck
// A mini weather station: reads temperature, humidity, and UV level,
// then displays all readings on an OLED screen. A tiny environmental
// dashboard you can carry around or mount in a room.
//
// MakeCode extensions required:
//   Click "Extensions" and search for "OLED". Add "OLED_SSD1306" by Tinkertanker.
//   Click "Extensions" and search for "DHT11". Add "DHT11_DHT22" by Alan Krantas.
//
// Physical setup:
//   DHT11 temperature/humidity sensor:
//     Connect S → micro:bit pin 0
//     Connect V → micro:bit 3V
//     Connect G → micro:bit GND
//   UV sensor (GUVA-S12SD):
//     Connect S → micro:bit pin 1
//     Connect V → micro:bit 3V
//     Connect G → micro:bit GND
//   OLED display (I2C):
//     Connect GND → micro:bit GND
//     Connect VCC → micro:bit 3V
//     Connect SCL → micro:bit pin 19
//     Connect SDA → micro:bit pin 20

// --- Setup ---
let temp2 = 0;
let hum2 = 0;
let uvRaw = 0;
let uvIdx = 0;
OLED.init(128, 64);
OLED.writeStringNewLine("Environment");
OLED.writeStringNewLine("Dashboard");
basic.pause(2000);

// --- Main Loop ---
basic.forever(function () {
  // Read DHT11
  dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P0, true, false, true);
  temp2 = dht11_dht22.readData(dataType.temperature);
  hum2 = dht11_dht22.readData(dataType.humidity);

  // Read UV sensor
  uvRaw = pins.analogReadPin(AnalogPin.P1);
  uvIdx = Math.round(Math.map(uvRaw, 0, 1023, 0, 11));

  // Update OLED display
  OLED.clear();
  OLED.writeStringNewLine("Temp:  " + temp2 + " C");
  OLED.writeStringNewLine("Humid: " + hum2 + " %");
  OLED.writeStringNewLine("UV:    " + uvIdx + " / 11");
  // Built-in light level for comparison
  OLED.writeStringNewLine("Light: " + input.lightLevel());

  // Log to serial
  serial.writeValue("temp", temp2);
  serial.writeValue("humidity", hum2);
  serial.writeValue("uvIndex", uvIdx);
  serial.writeValue("light", input.lightLevel());
  basic.pause(2000);
});
