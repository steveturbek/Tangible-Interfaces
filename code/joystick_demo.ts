// @ts-nocheck
// Reads an analog joystick and displays position as a dot on the LED screen.
// Pressing the joystick button plays a sound. Uses a KEYESTUDIO analog joystick.
//
// Wiring: Y direction → pin 0, X direction → pin 1, Switch → pin 2
// MAP scales the 0-1023 input to 0-4 (pixel positions on the LED grid)
// ROUND converts to whole numbers for LED coordinates
// Digital read pin 2: 1 = button clicked

// --- Setup ---
let Y = 0;
let X = 0;
serial.redirectToUSB();
basic.showIcon(IconNames.Chessboard);
music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone);
// --- Main Loop ---
basic.forever(function () {
  basic.clearScreen();
  X = Math.round(Math.map(pins.analogReadPin(AnalogReadWritePin.P1), 0, 1023, 4, 0));
  Y = Math.round(Math.map(pins.analogReadPin(AnalogReadWritePin.P0), 0, 1023, 0, 4));
  if (pins.digitalReadPin(DigitalPin.P2) == 1) {
    music.play(
      music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear),
      music.PlaybackMode.InBackground,
    );
    basic.showIcon(IconNames.SmallDiamond);
  } else {
    led.plotBrightness(X, Y, 255);
  }
  basic.pause(100);
  serial.writeNumbers([X, Y, 0]);
});
