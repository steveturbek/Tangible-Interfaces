---
title: Tangible Interfaces Hardware
---

# Tangible Interfaces Hardware

<div class="toc-wrapper" markdown="1">

## Contents

{: .no_toc}

- TOC
{:toc}
</div>

The microbit is a small and inexpensive computer and circuit board, which can be programmed via a web browser with simple coding. It has a surprising number of sensors and features built in.

## Materials we use

- [BBC Microbit Sensor Kit](https://www.amazon.com/dp/B09B7HV9WR)
- [USB-A to USB-C adapter](https://www.amazon.com/Basesailor-Thunderbolt-Converter-Generation-Microsoft/dp/B09SZ5NHF4/) (for newer computers)

## Microbit Documentation

- [https://makecode.microbit.org/\#editor](https://makecode.microbit.org/#editor) this is how you program the Microbit
- [Microbit Edge Connector pins](https://tech.microbit.org/hardware/edgeconnector)
- [Micro:bit V2.0 beginning Starter Kit](https://docs.keyestudio.com/projects/KS0306/en/latest/)
- [Micro:bit 45 in 1 Sensor Learning Kit](https://docs.keyestudio.com/projects/KS4009-KS4010/en/latest/) [wiki page](<https://wiki.keyestudio.com/KS4009(4010)_45_in_1_Sensor_Starter_Kit_For_BBC_Micro:bit>)

## Introduction to Microbit

- [https://microbit.org/get-started/getting-started/introduction/](https://microbit.org/get-started/getting-started/introduction/)
- [https://microbit.org/teach/lessons/](https://microbit.org/teach/lessons/)
- [https://microbit.org/teach/lessons/data-handling-sensor-design/](https://microbit.org/teach/lessons/data-handling-sensor-design/)
- [https://www.youtube.com/results?search_query=microbit](https://www.youtube.com/results?search_query=microbit)
- [https://www.reddit.com/r/microbit/](https://www.reddit.com/r/microbit/)
- [https://stackoverflow.com/questions/tagged/bbc-microbit](https://stackoverflow.com/questions/tagged/bbc-microbit)
- [https://createai.microbit.org](https://createai.microbit.org) - interesting application of data collection and machine learning
- [https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/bbc-micro-bit](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/bbc-micro-bit) - Construct kids game maker has a microbit plug in

## "Looks like" and a "Works like" prototypes

Students sometimes compromise the designed form of their design model to accommodate the prototype electronics. We don't make that mistake in this class.

Your design may be too small to hold the electronics, that is totally normal early in the design process. That's why we make "looks like" (aka actual size and shape) models, to see how it feels, and also, larger prototypes to test interaction, So for example, if you were designing an electronic ring remote, you could make one the size of a bracelet, or have the wires coming out into a box. Totally normal for prototyping.

When designing modern products, Designers and Engineers often make a "looks like" and a "works like" prototype. They are often look totally different until late in the engineering process. The goal of 'works like' prototypes is to quickly change and learn. Form follows function, but often you don’t know what the function looks like\! Example of a “works like” prototype: [the original iPhone Prototype](https://web.archive.org/web/20190501154547/https://www.theverge.com/2019/3/19/18263844/apple-iphone-prototype-m68-original-development-board-red)

## Tech Tips Triage for Microbit

- Make sure to check if sensor or motor needs 5v vs 3v. Some sensors need more volts or amps. Sometimes adding a power cable or battery pack just makes it work
- Make a firm base to attach things to
- Tape down wires. Often loose wires are the problem
- If using the T shaped microbit edge connector for a breadboard, put the battery pack into the T shaped connector, not the microbit.
- Which pins are always safe to use? 0,1,2
- LED ENABLE code command interferes with pins reading or writing, which can be confusing
- Watch out for multiple forever loops
- Keep your main program loop fast, so you can sample data frequently
- Be very careful with pauses - the microbit doesn't do ANYTHING when paused and will miss input or output.
- When powered just by microbit, a servo range is 90 degrees and is slower
- When powered with 6 AA, servo range goes to 180 degrees, is faster
- I2EE LCD screen - remember to adjust polarity or can look off
