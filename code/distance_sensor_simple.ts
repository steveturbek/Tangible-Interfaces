// @ts-nocheck
// Reads an ultrasonic distance sensor (HC-SR04) and displays the distance
// as a bar graph on the LED screen. Also logs distance values over serial.

// --- Setup ---
let DistanceInCM = 0;
led.enable(true);

// --- Main Loop ---
basic.forever(function () {
  DistanceInCM = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters);
  led.plotBarGraph(DistanceInCM, 40);
  serial.writeLine("DistanceInCM=" + DistanceInCM);
});
