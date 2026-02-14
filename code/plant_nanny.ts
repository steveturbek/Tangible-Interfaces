// @ts-nocheck
// A plant care monitor: reads soil moisture, temperature, and UV light,
// then shows plant health status on an OLED screen. When soil is too dry,
// the servo opens a water valve (or you can just use the alert to water manually).
//
// MakeCode extensions required:
//   Click "Extensions"
//  search for "OLED". Add "OLED_SSD1306" by Tinkertanker.
//  search for "servo". Add "microservo" extension
//
// Physical setup:
//   Soil moisture sensor:
//     Connect S → micro:bit pin 0 (analog read)
//     Connect V → micro:bit 3V
//     Connect G → micro:bit GND
//     Insert the metal prongs into the soil.
//   UV sensor (GUVA-S12SD):
//     Connect S → micro:bit pin 1 (analog read)
//     Connect V → micro:bit 3V
//     Connect G → micro:bit GND
//   Servo (for water valve — optional):
//     Connect signal → micro:bit pin 2
//     Connect VCC → battery pack positive
//     Connect GND → micro:bit GND
//   OLED display (I2C):
//     Connect GND → micro:bit GND
//     Connect VCC → micro:bit 3V
//     Connect SCL → micro:bit pin 19
//     Connect SDA → micro:bit pin 20

// --- Setup ---
let soilMoisture = 0;
let soilPercent = 0;
let uvRaw2 = 0;
let uvIdx2 = 0;
let dryThreshold = 30; // Below this % = needs water

OLED.init(128, 64);
OLED.writeStringNewLine("Plant Nanny");
OLED.writeStringNewLine("Starting...");
servos.P2.setAngle(0); // Valve closed
basic.pause(2000);

// --- Main Loop ---
basic.forever(function () {
  // Read soil moisture (higher reading = wetter soil)
  soilMoisture = pins.analogReadPin(AnalogPin.P0);
  soilPercent = Math.round(Math.map(soilMoisture, 0, 1023, 0, 100));

  // Read UV sensor
  uvRaw2 = pins.analogReadPin(AnalogPin.P1);
  uvIdx2 = Math.round(Math.map(uvRaw2, 0, 1023, 0, 11));

  // Update OLED display
  OLED.clear();
  OLED.writeStringNewLine("Soil: " + soilPercent + " %");
  OLED.writeStringNewLine("UV:   " + uvIdx2 + " / 11");
  OLED.writeStringNewLine("Temp: " + input.temperature() + " C");

  // Check if plant needs water
  if (soilPercent < dryThreshold) {
    OLED.writeStringNewLine("NEEDS WATER!");
    basic.showIcon(IconNames.Sad);
    // Open water valve (servo to 90 degrees)
    servos.P2.setAngle(90);
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground);
  } else {
    OLED.writeStringNewLine("Plant is happy");
    basic.showIcon(IconNames.Happy);
    // Close water valve
    servos.P2.setAngle(0);
  }

  serial.writeValue("soil", soilPercent);
  serial.writeValue("uvIndex", uvIdx2);
  basic.pause(5000);
});
