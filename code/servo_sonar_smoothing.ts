// @ts-nocheck
// Controls a servo motor based on an ultrasonic distance sensor reading,
// with data smoothing applied to prevent jittery movement.

// --- Setup ---
let newAngle = 0;
let SonarReading = 0;
let ServoAngle = 180;
servos.P2.setRange(0, 180);
basic.showIcon(IconNames.Chessboard);
// --- Main Loop ---
basic.forever(function () {
  SonarReading = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters);
  if (SonarReading > 1 && SonarReading < 40) {
    newAngle = Math.map(SonarReading, 1, 40, 0, 180);
    ServoAngle = Math.round(ServoAngle + (newAngle - ServoAngle) / 5);
    serial.writeLine("sonarCM:" + SonarReading + " angle:" + ServoAngle + " Angle Difference:" + (newAngle - ServoAngle));
    servos.P2.setAngle(ServoAngle);
    led.plotBarGraph(ServoAngle, 180);
  }
  basic.pause(100);
});
