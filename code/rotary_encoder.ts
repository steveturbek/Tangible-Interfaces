// @ts-nocheck
// Demonstrates a KY-040 rotary encoder: twist to change a value shown as a bar
// graph on the LED screen, press the button to reset. Requires the RotaryEncoder extension.

// --- Setup ---
let count = 0;
count = 50;
basic.showIcon(IconNames.SmallHeart);
RotaryEncoder.init(DigitalPin.P2, DigitalPin.P1, DigitalPin.P0);
led.plotBarGraph(50, 100);

// --- Event Handlers ---
// Runs when encoder is rotated left (counter-clockwise)
RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
  count += 5;
  serial.writeValue("count", count);
  led.plotBarGraph(count, 100);
});

// Runs when encoder is rotated right (clockwise)
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
  count += -5;
  serial.writeValue("count", count);
  led.plotBarGraph(count, 100);
});

// Runs when encoder button is pressed
RotaryEncoder.onPressEvent(function () {
  basic.showIcon(IconNames.Yes);
  count = 50;
  basic.pause(1000);
  led.plotBarGraph(count, 100);
});
