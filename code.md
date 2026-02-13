---
title: Tangible Interfaces Code
---

{% comment %}
The makecode.microbit.org links are under s t urbek gmail account
{% endcomment %}

<div class="toc-wrapper" markdown="1">
## Contents
{: .no_toc}
- TOC
{:toc}
</div>

## Basic Microbit Class code samples

### Compass

Reads the micro:bit's built-in compass and displays an arrow on the LED screen pointing in the compass direction.

[microbit.org code link](https://makecode.microbit.org/S03522-41298-89839-41752)

{% highlight typescript %}
{% include_relative code/compass.ts %}
{% endhighlight %}

### Accelerometer Tilt Game

Tilt-to-navigate game: tilt the micro:bit to move a bright dot toward a dimmer target dot on the 5x5 LED grid. Press button A when you reach it to check.

[microbit.org code link](https://makecode.microbit.org/S58906-30254-68205-13251)

{% highlight typescript %}
{% include_relative code/accelerometer_tilt_game.ts %}
{% endhighlight %}

### Basic Analog sensor

Reads an analog sensor on pin P0 and displays the value as a bar graph on the LED screen.

[microbit.org code link](https://makecode.microbit.org/S61449-51133-57093-06515)

{% highlight typescript %}
{% include_relative code/analog_reading.ts %}
{% endhighlight %}

### Ultrasonic Distance Sensor

Reads an ultrasonic distance sensor (HC-SR04) and displays the distance as a bar graph on the LED screen. In the microbit code editor, open "extensions", search for 'Sonar' and add. [Example project](https://www.instructables.com/Distance-Sensing-With-the-Microbit-and-Sonar-HC-SR/)
[Example video](https://www.youtube.com/watch?v=_nI336ZbHcQ)

[microbit.org code link](https://makecode.microbit.org/S87497-27065-52380-42014)

{% highlight typescript %}
{% include_relative code/distance_sensor_simple.ts %}
{% endhighlight %}

### Analog data smoothing

Demonstrates smoothing noisy analog sensor data using a rolling average and dynamic min/max tracking. More advanced concept to be aware of.

[microbit.org code link](https://makecode.microbit.org/S10223-09090-76174-26970)

{% highlight typescript %}
{% include_relative code/analog_data_smoothing.ts %}
{% endhighlight %}

### Rotary encoder

Demonstrates a KY-040 rotary encoder: twist to change a value shown as a bar graph, press the button to reset. Requires the RotaryEncoder extension.

[microbit.org code link](https://makecode.microbit.org/S96536-01875-53081-74399)

{% highlight typescript %}
{% include_relative code/rotary_encoder.ts %}
{% endhighlight %}

### Rotary encoder with RGB Color Picker

RGB rotary encoder color picker: twist to cycle through colors, press the button to send the selected hex color value over serial.

[microbit.org code link](https://makecode.microbit.org/S80320-36140-68879-21230)

{% highlight typescript %}
{% include_relative code/rotary_encoder_RGB_color_picker.ts %}
{% endhighlight %}

### Servo simple

Sweeps a servo motor back and forth from 0 to 180 degrees continuously.

[microbit.org code link](https://makecode.microbit.org/S99615-71280-94337-78432)

{% highlight typescript %}
{% include_relative code/servo_simple.ts %}
{% endhighlight %}

### Control Servo with analog sensor

Controls a servo motor position using an analog sensor input. The sensor reading on P1 is mapped to a servo angle on P0.

[microbit.org code link](https://makecode.microbit.org/S05211-57054-74886-19489)

{% highlight typescript %}
{% include_relative code/servo_analog_sensor.ts %}
{% endhighlight %}

### Servo sonar with smoothing

Controls a servo motor based on an ultrasonic distance sensor reading, with data smoothing applied to prevent jittery movement.

[microbit.org code link](https://makecode.microbit.org/S30781-81272-24701-69091)

{% highlight typescript %}
{% include_relative code/servo_sonar_smoothing.ts %}
{% endhighlight %}

### Joystick as input

Reads an analog joystick and displays position as a dot on the LED screen. Pressing the joystick button plays a sound.

[microbit.org code link](https://makecode.microbit.org/S98667-77037-39323-51354)

{% highlight typescript %}
{% include_relative code/joystick_demo.ts %}
{% endhighlight %}

## More Advanced programs

### Flappy pixel

A minimal version of Flappy Bird on the micro:bit 5x5 LED screen. Press button A to flap upward; avoid the walls scrolling toward you.

[microbit.org code link](https://makecode.microbit.org/S97208-24122-46510-97531)

{% highlight typescript %}
{% include_relative code/flappy_bird.ts %}
{% endhighlight %}

### Flappy Servo

Steers a servo motor up and down using buttons A and B. A simple demo of using buttons to control physical output.

[microbit.org code link](https://makecode.microbit.org/S30407-50237-21828-51335)

{% highlight typescript %}
{% include_relative code/flappy_servo.ts %}
{% endhighlight %}

### Wireless Social Network

Simple wireless messaging between two micro:bits using the radio. Press button A to send a message; received messages display on the LED screen.

[microbit.org code link](https://makecode.microbit.org/S33038-57917-41111-12362)

{% highlight typescript %}
{% include_relative code/micro_chat.ts %}
{% endhighlight %}
