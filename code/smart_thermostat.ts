// @ts-nocheck
// A mini smart thermostat: reads temperature, shows it on the OLED screen,
// and automatically turns on a fan when it gets too hot. This is how a Nest
// thermostat works at its core: sense → display → actuate.
//
// MakeCode extensions required:
//   Click "Extensions" and search for "OLED". Add "OLED_SSD1306" by Tinkertanker.
//   Click "Extensions" and search for "DHT11". Add "DHT11_DHT22" by Alan Krantas.
//
// Physical setup:
//   DHT11 temperature sensor:
//     Connect S → micro:bit pin 0
//     Connect V → micro:bit 3V
//     Connect G → micro:bit GND
//   OLED display (I2C):
//     Connect GND → micro:bit GND
//     Connect VCC → micro:bit 3V
//     Connect SCL → micro:bit pin 19
//     Connect SDA → micro:bit pin 20
//   Fan module:
//     Connect INA → micro:bit pin 1
//     Connect INB → micro:bit pin 2
//     Connect VCC → battery pack 5V
//     Connect GND → micro:bit GND
//
// Adjust the threshold temperature to suit your environment.

// --- Setup ---
let temp = 0;
let hum = 0;
let fanRunning = false;
let threshold = 26; // Fan turns on above this temperature (Celsius)

OLED.init(128, 64);
OLED.writeStringNewLine("Thermostat");
OLED.writeStringNewLine("Starting...");
pins.digitalWritePin(DigitalPin.P1, 0);
pins.digitalWritePin(DigitalPin.P2, 0);
basic.pause(2000);

// --- Main Loop ---
basic.forever(function () {
  // Read temperature and humidity
  dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P0, true, false, true);
  temp = dht11_dht22.readData(dataType.temperature);
  hum = dht11_dht22.readData(dataType.humidity);

  // Update OLED display
  OLED.clear();
  OLED.writeStringNewLine("Temp: " + temp + " C");
  OLED.writeStringNewLine("Humidity: " + hum + " %");
  OLED.writeStringNewLine("Threshold: " + threshold + " C");

  // Turn fan on or off based on temperature
  if (temp > threshold) {
    pins.digitalWritePin(DigitalPin.P1, 1);
    pins.digitalWritePin(DigitalPin.P2, 0);
    OLED.writeStringNewLine("Fan: ON");
    fanRunning = true;
  } else {
    pins.digitalWritePin(DigitalPin.P1, 0);
    pins.digitalWritePin(DigitalPin.P2, 0);
    OLED.writeStringNewLine("Fan: OFF");
    fanRunning = false;
  }

  serial.writeValue("temp", temp);
  serial.writeValue("humidity", hum);
  serial.writeValue("fan", fanRunning ? 1 : 0);
  basic.pause(2000);
});

// --- Event Handlers ---
// Button A: lower threshold
input.onButtonPressed(Button.A, function () {
  threshold -= 1;
});

// Button B: raise threshold
input.onButtonPressed(Button.B, function () {
  threshold += 1;
});
