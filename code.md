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

## Built-in Sensors

### Microbit Button

The simplest Microbit program: The LEDs show a number. Button B increases the number, Button A reduces the number.

[microbit.org code link](https://makecode.microbit.org/S01602-22886-00424-48550){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/microbit_button.ts %}
{% endhighlight %}

### Compass

Reads the micro:bit's built-in compass and displays an arrow on the LED screen pointing in the compass direction.

[microbit.org code link](https://makecode.microbit.org/S03522-41298-89839-41752){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/compass.ts %}
{% endhighlight %}

### Accelerometer Tilt Game

Tilt-to-navigate game: tilt the micro:bit to move a bright dot toward a dimmer target dot on the 5x5 LED grid. Press button A when you reach it to check.

[microbit.org code link](https://makecode.microbit.org/S80839-78778-12488-33539){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/accelerometer_tilt_game.ts %}
{% endhighlight %}

## Simple Digital Input

### Simple External Button

Reads an external push button — the simplest possible digital sensor, just on or off. Use this pattern any time you want a physical button separate from the micro:bit's built-in A and B buttons.

[microbit.org code link](https://makecode.microbit.org/S34771-57864-72947-15209){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/external_button.ts %}
{% endhighlight %}

### Motion Sensor

Detects human movement using a PIR (passive infrared) sensor — it senses body heat moving in front of it. When motion is detected, the LED screen shows an eye icon and plays a tone. Wiring: signal → P0, VCC → 3V, GND → GND.

[microbit.org code link](https://makecode.microbit.org/S57237-64913-73779-70242){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/pir_motion.ts %}
{% endhighlight %}

### Capacitive Touch

Detects touch using a capacitive sensor — no mechanical button needed. Any conductive surface (metal, fruit, foil, water) can become a touch input. Wiring: signal → P0, VCC → 3V, GND → GND.

[microbit.org code link](https://makecode.microbit.org/S24341-35626-88568-86883){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/capacitive_touch.ts %}
{% endhighlight %}

### Hall Magnetic Sensor

Detects a nearby magnet using a Hall effect sensor. Magnets can be hidden inside objects, behind walls, or under surfaces to create invisible triggers — this simple sensor is used everywhere in devices, cars, and homes. Wiring: signal → P0, VCC → 3V, GND → GND.

[microbit.org code link](https://makecode.microbit.org/S36339-46145-58671-14250){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/hall_magnetic.ts %}
{% endhighlight %}

## Simple Output

### Servo simple

Sweeps a servo motor back and forth from 0 to 180 degrees continuously.

[microbit.org code link](https://makecode.microbit.org/S99615-71280-94337-78432){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/servo_simple.ts %}
{% endhighlight %}

### Fan Module

Controls an L9110 fan module for physical, tactile output — you can feel the wind on your skin. Button A turns the fan on, Button B turns it off. Wiring: INA → P0, INB → P1, VCC → 5V (use battery pack), GND → GND.

[microbit.org code link](https://makecode.microbit.org/S14528-88419-18530-71499){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/fan_module.ts %}
{% endhighlight %}

### Relay Module

Controls a relay — an electrically operated switch that lets your micro:bit turn real-world devices on and off (lamps, fans, motors). You'll hear a satisfying "click" when it switches. Button A = on, Button B = off.

[microbit.org code link](https://makecode.microbit.org/S56233-20273-92817-14820){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/relay_module.ts %}
{% endhighlight %}

## Analog Sensors

### Basic Analog sensor

Reads an analog sensor on pin P0 and displays the value as a bar graph on the LED screen. An example sensor is the "[potentiometer](https://en.wikipedia.org/wiki/Potentiometer)" (a rotating variable resistor) that changes the voltage that the microbit sees.

[microbit.org code link](https://makecode.microbit.org/S39034-44877-87472-83440){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/analog_reading.ts %}
{% endhighlight %}

### Pressure/Force Sensor

Reads a thin-film pressure sensor and shows how hard you're pressing as a bar graph. Unlike a button (on/off), this sensor gives an analog value — it knows HOW MUCH force is applied. Wiring: signal → P0, VCC → 3V, GND → GND.

[microbit.org code link](https://makecode.microbit.org/S52489-75472-17902-65753){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/pressure_sensor.ts %}
{% endhighlight %}

### Joystick Input

Reads an analog joystick and displays position as a dot on the LED screen. Pressing the joystick button plays a sound.

The joystick is actually simply 2 rotating variable resistors

[microbit.org code link](https://makecode.microbit.org/S69026-12962-42500-76763){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/joystick_demo.ts %}
{% endhighlight %}

### Ultraviolet Sensor

Reads a GUVA-S12SD UV sensor and estimates the UV index (0-11). When should you reapply sunscreen? Great for wearable or outdoor projects.

[microbit.org code link](https://makecode.microbit.org/S05868-83871-35668-42681){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/uv_sensor.ts %}
{% endhighlight %}

### Analog Gas Sensor

Reads an MQ-2 gas sensor that detects flammable gases and smoke. The bar graph gets taller as gas concentration increases. The sensor needs 5V and about 20 seconds to warm up.

[microbit.org code link](https://makecode.microbit.org/S00020-21111-68692-81197){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/gas_sensor.ts %}
{% endhighlight %}

### Analog Alcohol Sensor

Reads an MQ-3 alcohol sensor that detects alcohol vapor in the air. Try holding hand sanitizer near the sensor. Needs 5V and about 20 seconds to warm up.

[microbit.org code link](https://makecode.microbit.org/S98773-95694-68309-19393){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/alcohol_sensor.ts %}
{% endhighlight %}

## Sensors and Displays Requiring Extensions

### Ultrasonic Distance Sensor

Reads an ultrasonic distance sensor (HC-SR04) and displays the distance as a bar graph on the LED screen. In the microbit code editor, open "extensions", search for 'Sonar' and add. [Example project](https://www.instructables.com/Distance-Sensing-With-the-Microbit-and-Sonar-HC-SR/)
[Example video](https://www.youtube.com/watch?v=_nI336ZbHcQ)

[microbit.org code link](https://makecode.microbit.org/S53335-40009-08961-54458){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/distance_sensor_simple.ts %}
{% endhighlight %}

### Temperature And Humidity Sensor

Reads temperature and humidity from a DHT11 sensor — one sensor, two readings. The core of every smart thermostat or weather station. Requires the "DHT11_DHT22" MakeCode extension (search "DHT11" in Extensions).

[microbit.org code link](https://makecode.microbit.org/S71698-40589-56379-36890){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/temp_humidity.ts %}
{% endhighlight %}

### Rotary encoder

Demonstrates a KY-040 rotary encoder: twist to change a value shown as a bar graph, press the button to reset. Requires the RotaryEncoder extension.

[microbit.org code link](https://makecode.microbit.org/S26338-02623-54453-47968){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/rotary_encoder.ts %}
{% endhighlight %}

### IR Remote Reader

Reads button presses from the included IR remote (or any IR remote — try your TV remote). Point a remote at the IR receiver and the micro:bit shows which button code was received. Requires the "MakerBit IR Receiver" MakeCode extension (search "makerbit-ir" in Extensions).

[microbit.org code link](https://makecode.microbit.org/S42713-43807-91759-52997){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/ir_remote_reader.ts %}
{% endhighlight %}

### IR Remote Transmit To Control Your Devices

Record-and-replay: capture an IR signal from any remote, then replay it to control real devices like your TV or AC. Uses both an IR receiver and IR transmitter LED. Requires the "MakerBit IR Receiver" and "MakerBit IR Transmitter" MakeCode extensions (search "makerbit-ir" in Extensions).

[microbit.org code link](https://makecode.microbit.org/S73772-26561-77069-88787){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/ir_remote_transmit.ts %}
{% endhighlight %}

### OLED Display

Displays text and numbers on a 0.96" OLED screen (128x64 pixels) — real visual output beyond the 5x5 LED grid. Shows a counter, light level, and temperature. Requires the "OLED_SSD1306" MakeCode extension (search "OLED" in Extensions). Uses I2C: plug into the sensor shield's I2C port.

[microbit.org code link](https://makecode.microbit.org/S49919-68545-45703-56022){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/oled_display.ts %}
{% endhighlight %}

### LCD Display

Displays text on a 1602 LCD screen (2 rows of 16 characters) — the classic display found on microwaves, thermostats, and vending machines. Requires the "i2cLCD1602" MakeCode extension (search "LCD1602" in Extensions). Uses I2C: plug into the sensor shield's I2C port. Tip: if the screen looks blank, adjust the blue potentiometer on the back.

[microbit.org code link](https://makecode.microbit.org/S33233-51836-01199-90589){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/lcd_display.ts %}
{% endhighlight %}

## Medium complexity examples

### Analog data smoothing

Demonstrates smoothing noisy analog sensor data using a rolling average and dynamic min/max tracking. More advanced concept to be aware of.

[microbit.org code link](https://makecode.microbit.org/S72520-01811-63170-10153){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/analog_data_smoothing.ts %}
{% endhighlight %}

### Rotary encoder with RGB Color Picker

RGB rotary encoder color picker: twist to cycle through colors, press the button to send the selected hex color value over serial.

[microbit.org code link](https://makecode.microbit.org/S80320-36140-68879-21230){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/rotary_encoder_RGB_color_picker.ts %}
{% endhighlight %}

### Control Servo with analog sensor

Controls a servo motor position using an analog sensor input. The sensor reading on P1 is mapped to a servo angle on P0.

[microbit.org code link](https://makecode.microbit.org/S03603-60472-18178-74073){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/servo_analog_sensor.ts %}
{% endhighlight %}

### Servo sonar with smoothing

Controls a servo motor based on an ultrasonic distance sensor reading, with data smoothing applied to prevent jittery movement.

[microbit.org code link](https://makecode.microbit.org/S05621-49889-56326-83612){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/servo_sonar_smoothing.ts %}
{% endhighlight %}

## More Advanced programs

### Flappy pixel

A minimal version of Flappy Bird on the micro:bit 5x5 LED screen. Press button A to flap upward; avoid the walls scrolling toward you.

[microbit.org code link](https://makecode.microbit.org/S97208-24122-46510-97531){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/flappy_bird.ts %}
{% endhighlight %}

### Flappy Servo

Steers a servo motor up and down using buttons A and B. A simple demo of using buttons to control physical output.

[microbit.org code link](https://makecode.microbit.org/S30407-50237-21828-51335){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/flappy_servo.ts %}
{% endhighlight %}

### Smart Thermostat Demo

A thermostat in miniature: reads temperature from a DHT11 sensor, displays it on an OLED screen, and automatically turns on a fan when it gets too hot. Buttons A/B adjust the threshold. Components: DHT11 + OLED + Fan Module. Requires "OLED_SSD1306" and "DHT11_DHT22" MakeCode extensions.

[microbit.org code link](https://makecode.microbit.org/S25486-30613-71522-66974){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/smart_thermostat.ts %}
{% endhighlight %}

### Proximity-Reactive Object

An object that reacts as you approach: OLED display shows different messages at different distances, and a servo arm points toward you. Think: interactive museum exhibit, responsive furniture, robot personality. Components: Ultrasonic + OLED + Servo. Requires "OLED_SSD1306" and "Sonar" MakeCode extensions.

[microbit.org code link](https://makecode.microbit.org/S37028-41709-41008-80155){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/proximity_reactive.ts %}
{% endhighlight %}

### Security / Alert System

A simple security system with three states: DISARMED, ARMED, and TRIGGERED. PIR motion sensor detects intruders, buzzer sounds the alarm, OLED shows status. Press A to arm (with countdown), B to disarm. Demonstrates state machines — how every real product manages modes. Components: PIR + Buzzer + OLED. Requires "OLED_SSD1306" MakeCode extension.

[microbit.org code link](https://makecode.microbit.org/S69742-81490-23458-35207){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/security_system.ts %}
{% endhighlight %}

### Environmental Dashboard

A mini weather station: reads temperature, humidity, UV level, and light on one OLED display. Multiple sensors feeding one screen — teaches data visualization on physical displays. Components: DHT11 + UV sensor + OLED. Requires "OLED_SSD1306" and "DHT11_DHT22" MakeCode extensions.

[microbit.org code link](https://makecode.microbit.org/S46335-29718-49659-53895){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/environmental_dashboard.ts %}
{% endhighlight %}

### Plant Nanny

A plant care monitor: reads soil moisture, UV light, and temperature, then shows plant health on an OLED screen. When soil is too dry, a servo opens a water valve (or just alerts you to water manually). Components: Soil moisture sensor + UV sensor + Servo + OLED. Requires "OLED_SSD1306" MakeCode extension.

[microbit.org code link](https://makecode.microbit.org/S97466-92196-33947-39879){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/plant_nanny.ts %}
{% endhighlight %}

### Wireless Social Network

Simple wireless messaging between two micro:bits using the radio. Press button A to send a message; received messages display on the LED screen.

[microbit.org code link](https://makecode.microbit.org/S17359-26915-91904-11099){:target="\_blank"}

{% highlight typescript %}
{% include_relative code/micro_chat.ts %}
{% endhighlight %}

## Future

### MakeCode Data Logging

The Microbit MakeCode editor has built-in data logging that saves to the microbit's flash memory. You can log data, then download it as a CSV file when you connect the Microbit to your computer via USB.

### Add SD card module (standalone logging)

Connect an SD card reader via SPI pins:
Requires additional hardware (~$5)
