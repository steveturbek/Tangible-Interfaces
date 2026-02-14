// @ts-nocheck
// An object that reacts as you approach: the OLED display changes its message
// and a servo arm points toward you based on distance. Think: interactive museum
// exhibit, responsive furniture, or a robot with personality.
//
// MakeCode extensions required:
//   Click "Extensions" and search for "OLED". Add "OLED_SSD1306" by Tinkertanker.
//   Click "Extensions" and search for "Sonar". Add the Sonar extension.
//
// Physical setup:
//   Ultrasonic sensor (HC-SR04):
//     Connect Trig → micro:bit pin 0
//     Connect Echo → micro:bit pin 1
//     Connect VCC → micro:bit 5V (use battery pack)
//     Connect GND → micro:bit GND
//   OLED display (I2C):
//     Connect GND → micro:bit GND
//     Connect VCC → micro:bit 3V
//     Connect SCL → micro:bit pin 19
//     Connect SDA → micro:bit pin 20
//   Servo motor:
//     Connect signal → micro:bit pin 2
//     Connect VCC → battery pack positive
//     Connect GND → micro:bit GND

// --- Setup ---
let distance = 0;
let servoAngle = 90;
OLED.init(128, 64);
OLED.writeStringNewLine("Waiting...");
servos.P2.setRange(0, 180);

// --- Main Loop ---
basic.forever(function () {
  distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters);

  // Map distance to servo angle: closer = more servo movement
  // At 40cm+ the servo centers, at 5cm it swings fully
  servoAngle = Math.round(Math.map(distance, 5, 40, 180, 90));
  servoAngle = Math.constrain(servoAngle, 0, 180);
  servos.P2.setAngle(servoAngle);

  // Change OLED message based on distance zones
  OLED.clear();
  OLED.writeStringNewLine("Distance: " + distance + "cm");

  if (distance < 10) {
    OLED.writeStringNewLine("TOO CLOSE!");
    basic.showIcon(IconNames.Surprised);
  } else if (distance < 25) {
    OLED.writeStringNewLine("Hello there!");
    basic.showIcon(IconNames.Happy);
  } else if (distance < 50) {
    OLED.writeStringNewLine("Come closer...");
    basic.showIcon(IconNames.Asleep);
  } else {
    OLED.writeStringNewLine("Waiting...");
    basic.clearScreen();
  }

  serial.writeValue("distance", distance);
  serial.writeValue("servo", servoAngle);
  basic.pause(200);
});
