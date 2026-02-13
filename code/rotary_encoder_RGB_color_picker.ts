// @ts-nocheck
//
//  RGB rotary encoder color picker: twist to cycle through colors on the built-in
//  RGB LED, press the button to send the selected hex color value over serial.
//
//  The RGB Encoder has 2 sides with pins
//    Facing the 3 pin side, left to right
//    1) Encoder A connect to Pin 9
//    2) Ground
//     3) Encoder B connect to Pin 8
//    Facing the 5 pin side, left to right
//    4) Voltage. 3.3v seems to work
//    5) Blue connect to Pin 2
//    6) Switch connect to Pin 16
//    7) Green connect to Pin 1
//     8) Red connect to Pin 0
//  Note the device is wired different than other simple components, which can cause confusion
//  You set LED pins down to light them.
//  You can use analog out to control brightness,
//  pins.analog_write_pin(AnalogPin.P0, 0) is fully on
//  pins.analog_write_pin(AnalogPin.P0, 1023) is fully off
//  Rotary Encoder can NOT use the standard microbit KY-040 rotary encoder extension
//  very helpful guide https://qbalsdon.github.io/circuitpython/rotary-encoder/python/led/2021/02/27/rgb-rotary-encoder.html

// --- Setup ---
let current_time: number;
let encoder_a: number;
let encoder_b: number;

led.enable(false);
serial.redirectToUSB();
pins.setPull(DigitalPin.P8, PinPullMode.PullUp);
pins.setPull(DigitalPin.P9, PinPullMode.PullUp);
pins.setPull(DigitalPin.P16, PinPullMode.PullDown);
let red = 255;
let green = 0;
let blue = 0;
let color_position = 0;
let encoder_a_prev = 1;
let loop_time = input.runningTime();

// --- Functions ---
function to_hex(value: number) {
  let hex_digits = "0123456789abcdef";
  return hex_digits[Math.idiv(value, 16)] + hex_digits[value % 16];
}

function set_color_from_position(pos: number) {
  if (pos < 85) {
    red = 255 - pos * 3;
    green = pos * 3;
    blue = 0;
  } else if (pos < 170) {
    pos -= 85;
    red = 0;
    green = 255 - pos * 3;
    blue = pos * 3;
  } else {
    pos -= 170;
    red = pos * 3;
    green = 0;
    blue = 255 - pos * 3;
  }
}

// --- Main Loop ---
while (true) {
  set_color_from_position(color_position);
  pins.analogWritePin(AnalogPin.P0, 1023 - red * 4);
  pins.analogWritePin(AnalogPin.P1, 1023 - green * 4);
  pins.analogWritePin(AnalogPin.P2, 1023 - blue * 4);
  //  Button - flash white and send hex color
  if (pins.digitalReadPin(DigitalPin.P16) == 1) {
    serial.writeLine("#" + to_hex(red) + to_hex(green) + to_hex(blue));
    //  Flash white
    pins.analogWritePin(AnalogPin.P0, 0);
    pins.analogWritePin(AnalogPin.P1, 0);
    pins.analogWritePin(AnalogPin.P2, 0);
    basic.pause(200);
  }

  //  Check encoder
  current_time = input.runningTime();
  if (current_time >= loop_time + 5) {
    encoder_a = pins.digitalReadPin(DigitalPin.P8);
    encoder_b = pins.digitalReadPin(DigitalPin.P9);
    if (encoder_a == 0 && encoder_a_prev == 1) {
      if (encoder_b == 1) {
        color_position += 5;
        //  Clockwise - step forward
        if (color_position > 255) {
          color_position = 0;
        }
      } else {
        color_position -= 5;
        //  Counter-clockwise - step back
        if (color_position < 0) {
          color_position = 255;
        }
      }
    }

    encoder_a_prev = encoder_a;
    loop_time = current_time;
  }

  basic.pause(10);
}
