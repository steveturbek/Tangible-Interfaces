// @ts-nocheck
// A simple security system: PIR motion sensor triggers an alarm with buzzer
// and OLED display. Press button A to arm, button B to disarm.
// Demonstrates a state machine — the system is always in one of three states:
// DISARMED → ARMED → TRIGGERED.
//
// MakeCode extension required:
//   Click "Extensions" and search for "OLED". Add "OLED_SSD1306" by Tinkertanker.
//
// Physical setup:
//   PIR motion sensor:
//     Connect S → micro:bit pin 0
//     Connect V → micro:bit 3V
//     Connect G → micro:bit GND
//   Passive buzzer:
//     Connect S → micro:bit pin 1
//     Connect V → micro:bit 3V
//     Connect G → micro:bit GND
//   OLED display (I2C):
//     Connect GND → micro:bit GND
//     Connect VCC → micro:bit 3V
//     Connect SCL → micro:bit pin 19
//     Connect SDA → micro:bit pin 20

// --- Setup ---
// States: 0 = DISARMED, 1 = ARMED, 2 = TRIGGERED
let state = 0;
let motion = 0;
OLED.init(128, 64);
OLED.writeStringNewLine("Security System");
OLED.writeStringNewLine("Press A to arm");

// --- Event Handlers ---
// Button A: arm the system
input.onButtonPressed(Button.A, function () {
  if (state == 0) {
    state = 1;
    OLED.clear();
    OLED.writeStringNewLine("ARMING...");
    // 5 second countdown before armed
    for (let i = 5; i > 0; i--) {
      basic.showNumber(i);
      basic.pause(1000);
    }
    OLED.clear();
    OLED.writeStringNewLine("ARMED");
    OLED.writeStringNewLine("Press B to disarm");
    basic.showIcon(IconNames.SmallDiamond);
    serial.writeLine("System armed");
  }
});

// Button B: disarm the system
input.onButtonPressed(Button.B, function () {
  state = 0;
  music.stopAllSounds();
  OLED.clear();
  OLED.writeStringNewLine("DISARMED");
  OLED.writeStringNewLine("Press A to arm");
  basic.showIcon(IconNames.Heart);
  serial.writeLine("System disarmed");
});

// --- Main Loop ---
basic.forever(function () {
  if (state == 1) {
    // ARMED: check for motion
    motion = pins.digitalReadPin(DigitalPin.P0);
    if (motion == 1) {
      state = 2;
      serial.writeLine("MOTION DETECTED!");
    }
  }

  if (state == 2) {
    // TRIGGERED: alarm!
    OLED.clear();
    OLED.writeStringNewLine("!! ALERT !!");
    OLED.writeStringNewLine("Motion detected!");
    OLED.writeStringNewLine("Press B to disarm");
    basic.showIcon(IconNames.Skull);
    music.play(
      music.tonePlayable(988, music.beat(BeatFraction.Quarter)),
      music.PlaybackMode.InBackground,
    );
    basic.pause(200);
    basic.showIcon(IconNames.No);
    basic.pause(200);
  }

  basic.pause(100);
});
