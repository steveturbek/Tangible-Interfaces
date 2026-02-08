---
title: Tangible Interfaces Class Bluetooth Media Remote Control project
layout: default
---

# Bluetooth Media Remote Control

Design Brief: Design and make a working remote control for music/video on your laptop or phone. You have been hired to discover an interesting need

Example software will be provided, your task is to design the physical form and one or more sensors and outputs to make an engaging and innovative experience.

This is a deceptively simple product that everyone can understand and we can build in class. It may seem boring, but it rewards exploration of user needs and technical opportunities.

- _I work in an operating room and music always makes the day better. For years, I've used radio frequency remotes to control iPods while scrubbed in, all the while unable to utilize an iOS device for this purpose until now. This is the answer to a tiny prayer that somebody make a remote for the iPhone. I love this thing. I love it so much._ [product review](https://www.amazon.com/Satechi-Bluetooth-Button-Media-Compatible/dp/B00RM75NL0)
- _I bought this for my motorcycle so I could control my music in my bluetooth helmet without taking my hands off of the handle bars. The steering wheel attachment is awesome and I used it to help mount it to my handlebars._ [product review](https://www.amazon.com/Satechi-Bluetooth-Button-Media-Compatible/dp/B00RM75NL0))

## Parts

This is a fun little demo project using a Micro:bit as a Bluetooth media control remote. It doesn't play music, it controls your computer / phone. Note: this works, but is really a basic tech demo for students to extend and explore. Opportunities include adding other features, using other fun sensors, adding a power switch or rechargeable battery, adding lights, etc

- Microbit v2
- Sensor(s)
- Lights?
- 2 AAA batteries
- metal strips for battery contacts, or reuse from other products
- various short wires, soldered or ribbon cables

## Instructions

- Play around with microbit and sensors
- Identify your user and where they will use it (while biking? in Surgery?, perhaps they do not have use of their limbs?)
- What constraints to they have? What opportunities?
- Select a sensor(s)
- Program Microbit via USB cable
- Test program on breadboard
- Pair via bluetooth to target device
- Design your container
- Print parts
- Assemble frame
- Test program
- Rock on!🤘

## Bluetooth Media Service commands

- next
- previous
- stop
- play/pause
- mute
- volume up
- volume down
- eject

Note that the same code also enables the microbit to become a keyboard, mouse or gamepad

[Controlling YouTube videos](https://makecode.microbit.org/S91983-65039-74564-26926) demonstrates the "jump back 10 seconds" for learning guitar, etc It only works for youTube on a laptop chrome browser. (this is a limitation of the iphone, not the microbit)

## Example Project

This is a sample project using the common KY-040 rotary encoder sensor.

- [Example reference 3D model](https://www.thingiverse.com/thing:7057254)
- [Microbit Code for example](https://makecode.microbit.org/S62191-90771-53225-82716)
- [example of saving state of the volume of the device](https://makecode.microbit.org/_esRE4E4J2V0r) Note doesn't work well!

## References

- The Microbit Bluetooth code uses the awesome [microbit-pxt-blehid extension by bsiever](https://github.com/bsiever/microbit-pxt-blehid)
- [How to Pair and Unpair the Microbit to you phone & computer](https://bsiever.github.io/microbit-pxt-blehid/#2-have-your-device-connect-to-the-microbit)
- [Human interface device](https://en.wikipedia.org/wiki/Human_interface_device))
- [Bluetooth Media Control Service Official Docs](https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/35697-MCS-html5/out/en/index-en.html) -not very beginner friendly
