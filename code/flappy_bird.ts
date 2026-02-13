// @ts-nocheck

// A minimal version of Flappy Bird on the micro:bit 5x5 LED screen.
// Press button A to flap upward; avoid the walls scrolling toward you.

// --- Event Handlers ---
// Runs when button A is pressed - flap the bird upward
input.onButtonPressed(Button.A, function () {
  birdY += -1;
  if (birdY < 0) {
    birdY = 0;
  }
});
// --- Setup ---
let birdY = 0;
basic.clearScreen();
let score = 0;
birdY = 0;
let wallX = 5;
let WallHoleY = 2;
// --- Main Loop ---
basic.forever(function () {
  basic.clearScreen();
  if (wallX < 0) {
    wallX = 4;
    WallHoleY = randint(0, 4);
  }
  for (let index = 0; index <= 4; index++) {
    led.plotBrightness(wallX, index, 28);
  }
  led.unplot(wallX, WallHoleY);
  if (birdY > 4) {
    birdY = 4;
  }
  led.plot(0, birdY);
  if (wallX == 0) {
    if (birdY == WallHoleY) {
      music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone);
    } else {
      music.play(music.tonePlayable(131, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone);
    }
  }
  wallX += -1;
  birdY += 1;
  basic.pause(1000);
});
