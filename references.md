# Tangible Interfaces References

<div class="toc-wrapper" markdown="1">

## Contents

{: .no_toc}

- TOC
{:toc}
</div>

## Case Study: Car Dashboard Design

The design of in-car interfaces has become increasingly controversial as touchscreens replace traditional physical controls, creating a tension between technological advancement and user safety. Customers and safety researchers have expressed clear preference for physical over touch screen controls.

Safety concerns are paramount, as research consistently shows touchscreens require visual attention, taking drivers' eyes off the road for dangerous periods. Despite these concerns, economic factors drive touchscreen adoption, as automakers find them cheaper to manufacture and update than physical components. The "Tesla effect" has been significant, with Tesla pioneering large touchscreens in cars with the 2012 Model S, setting a trend other manufacturers followed. However, regulatory intervention is emerging, with safety authorities like Euro NCAP beginning to require physical controls for critical functions. Consumer experience has evolved too—after initial enthusiasm, many drivers find touchscreens frustrating in real-world driving conditions. In response, a hybrid approach is developing, with the industry moving toward combining physical controls for essential functions with touchscreens for secondary features. Some experts suggest voice interfaces might eventually reduce reliance on both touchscreens and physical buttons, though haptic feedback limitations remain a fundamental issue, as touchscreens lack the tactile feedback that allows drivers to operate controls without looking away from the road.

**As an exercise in forensic design, why did this trend start, why did it last so long, and why might it be changing now.**

- [The Subtle Art of Designing Physical Controls for Cars](https://www.theturnsignalblog.com/the-subtle-art-of-designing-physical-control-for-cars/)
- [Tesla’s Touchscreen UI: A Case Study of Car-Dashboard User Interface](https://www.nngroup.com/articles/tesla-big-touchscreen/)
- [3 reasons why Tesla’s dashboard touch screens suck](https://www.fastcompany.com/90356020/3-reasons-why-teslas-dashboard-touch-screens-suck)
- [https://www.bloomberg.com/news/features/2023-02-13/are-car-touch-screens-getting-out-of-control](https://www.bloomberg.com/news/features/2023-02-13/are-car-touch-screens-getting-out-of-control)
- [Physical Controls Are Back Because Drivers Are Sick Of Endless Touchscreen Menus](https://www.carscoops.com/2024/11/button-expert-explains-why-touchscreens-didnt-actually-kill-physical-controls/)
- [Touchscreens Are Out, and Tactile Controls Are Back](https://spectrum.ieee.org/touchscreens)
- [Study: Hardware buttons in cars are safer than touchscreens](https://www.themanual.com/auto/touchscreen-in-car-less-safe-than-buttons/)
- [Could Touchscreens in Cars Be on Their Way Out Already? Let's Hope So](https://www.lifewire.com/car-touchscreens-safety-ratings-8605508)
- [If Cars With Touchscreens Are Unsafe at Any Speed, Why Do We Have Them?](https://www.kiplinger.com/personal-finance/car-touchscreens-unsafe-why-do-we-have-them)
- [Our Tesla Model 3's Turn Signals Aren't Just Dumb, They're Borderline Unsafe](https://www.edmunds.com/car-news/2024-tesla-model-3-turn-signals-long-term-update.html)
- [Analysis: Are touchscreens a good thing?](https://www.autocar.co.uk/car-news/technology/analysis-are-touchscreens-good-thing)
- [New Safety Guidelines Could Kill an Annoying Automotive Trend](https://www.motortrend.com/news/new-car-interior-touchscreen-euro-ncap-safety-testing)
- [Former Apple design boss calls for physical buttons to return to car interiors](https://www.drive.com.au/news/former-apple-design-boss-physical-buttons-return-to-car-interiors/)
- [Physical buttons outperform touchscreens in new cars, test finds](https://www.vibilagare.se/english/physical-buttons-outperform-touchscreens-new-cars-test-finds)
- [screens Studios](https://www.screensstudio.com/en/products) - recordings of almost every car infotainment system
- [Auto Interfaces](https://www.autointerfaces.com)
- [Sci-Fi Interfaces](https://scifiinterfaces.com)

Interestingly, the new apple car play addresses very few of the safety concerns above

- [New Apple CarPlay Ultra tested: hands-on](https://www.topgear.com/car-news/tech/new-apple-carplay-ultra-tested-hands-every-new-feature#comments)

# Tips for class

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

# Reference: Microbit

The microbit is a small and inexpensive computer and circuit board, which can be programmed via a web browser with simple coding. It has a surprising number of sensors and features built in.

## Materials to get

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

## Microbit Class code samples

1. [Compass](https://makecode.microbit.org/S73740-73796-06271-95761)
1. [Accelerometer Tilt Game](https://makecode.microbit.org/S21771-63176-65881-31903)
1. [Ultrasonic Distance Sensor](https://makecode.microbit.org/S35805-39809-52833-74997) In microbit code editor, open "extensions", search for 'Sonar' and add. [example project](https://www.instructables.com/Distance-Sensing-With-the-Microbit-and-Sonar-HC-SR/) [Example video](https://www.youtube.com/watch?v=_nI336ZbHcQ)
1. [Basic Analog sensor](https://makecode.microbit.org/S00413-52693-48127-34852)
1. [Analog-data-smoothing](https://makecode.microbit.org/S61055-28532-56631-56450) More advanced concept to be aware of
1. [Rotary encoder](https://makecode.microbit.org/S64071-13319-65768-28069)
1. [Rotary encoder with RGB Color Picker](https://makecode.microbit.org/S70469-08391-17891-16578)
1. [Servo simple](https://makecode.microbit.org/S21494-23982-18118-18659)
1. [Control Servo with potentiometer](https://makecode.microbit.org/S07735-75535-28524-22846)
1. [Servo sonar with smoothing](https://makecode.microbit.org/S97093-33787-20371-25883)
1. [Joystick as input](https://makecode.microbit.org/S60802-26853-41090-38929)
1. [Flappy pixel](https://makecode.microbit.org/S38662-17419-00388-04398)
1. [Flappy Servo](https://makecode.microbit.org/S88818-34957-38430-63386)
1. [Wireless Social Network](https://makecode.microbit.org/#) Choose "Micro Chat" Tutorial

# Tangible Design Inspiration

- [The timeless appeal of Olivetti's industrial and minimalist design style](https://abduzeedo.com/timeless-appeal-olivettis-industrial-and-minimalist-design-style#google_vignette)
- [https://www.domusweb.it/en/design/2022/07/06/quando-il-design-italiano-era-una-cosa-da-fantascienza.html](https://www.domusweb.it/en/design/2022/07/06/quando-il-design-italiano-era-una-cosa-da-fantascienza.html)
- [https://www.yankodesign.com/2024/12/04/modular-numpad-concept-adds-some-teenage-engineering-industrial-aesthetic-to-your-workflow/](https://www.yankodesign.com/2024/12/04/modular-numpad-concept-adds-some-teenage-engineering-industrial-aesthetic-to-your-workflow/)
- [You spin me right round, baby, right round.](https://www.theverge.com/news/622914/auto-draft)
- “Knob Feel” A dude who rated stereo knobs
  - [Arcam \- AVR21 \- AV Receiver \- Knob Feel Review](https://www.youtube.com/watch?v=5I2J7BAcQro)
  - [Onkyo TX-NR616 Knob Feel Review](https://www.youtube.com/watch?v=hnloAUVLAho)
  - [Knob Feel Showcase - Xeeltech Hapticore - CUSTOM KNOB FEELS](https://www.youtube.com/watch?v=grDQHYVJJGY)
  - [2015 Knob Feel Awards](https://www.youtube.com/watch?v=HN49Vls-UlM)
- [iPod click wheel button hardware design](https://web.archive.org/web/20181130052011/https://www.theverge.com/circuitbreaker/2018/11/21/18105423/ipod-click-wheel-button-music-control-hardware-design)
- [Inside the original iPod scroll wheel](http://reddit.com/r/ipod/comments/vvu3po/replacing_the_ball_bearing_on_the_1g/)
- [Vintage phone design examples](https://www.reddit.com/r/nextfuckinglevel/comments/1ly3yl5/design_of_vintage_phones/)

## Tangible Tech Inspiration

- This shows genius level work: How did the PONG game get made before software existed? [https://www.falstad.com/pong/index.html](https://www.falstad.com/pong/index.html)
- How the 80's Nintendo Duck Hunt light gun worked [How the Nintendo Zapper worked in Slow Motion - The Slow Mo Guys](https://www.youtube.com/watch?v=V6XnSvB34y8)
- [scottbez1/smartknob: Haptic input knob with software-defined endstops and virtual detents](https://github.com/scottbez1/smartknob)
- [Detent Polymagnet pair \- 12 position (30 degree) \- \#6 CTSK \- 1" D-shape](https://www.polymagnet.com/products/detent-polymagnet-pair-12-position-30-degree-6-ctsk-1-d-shape)
- [MaTouch ESP32-S3 RotaryIPS-Display1.28" GC9A01](https://www.makerfabs.com/matouch-esp32-s3-rotaryips-display1-28-gc9a01.html)
- [T-Encoder Pro \[US\]](https://lilygo.cc/products/t-encoder-pro-us)
- [https://lovemyswitches.com/knobs/](https://lovemyswitches.com/knobs/)
- [https://github.com/UrbanCircles/igor](https://github.com/UrbanCircles/igor)
  - [https://www.makerfabs.com/matouch-smartknob-assembled.html](https://www.makerfabs.com/matouch-smartknob-assembled.html)
- [https://hackaday.com/2021/12/11/getting-familiar-with-round-displays/](https://hackaday.com/2021/12/11/getting-familiar-with-round-displays/)
- [https://www.youtube.com/watch?v=nZa-Vqu-\_fU](https://www.youtube.com/watch?v=nZa-Vqu-_fU)
  - [https://github.com/sb-ocr/focus-dial](https://github.com/sb-ocr/focus-dial)
  - [https://www.instructables.com/Focus-Dial-a-Digital-Distraction-Blocker/](https://www.instructables.com/Focus-Dial-a-Digital-Distraction-Blocker/)
- [Ring Rotary Encoder https://www.digikey.ca/en/products/detail/bourns-inc/PER561-P115-N0015/13999552](https://www.digikey.ca/en/products/detail/bourns-inc/PER561-P115-N0015/13999552)
- [https://www.ptreeusa.com/ttrack_knobs_bolts.html](https://www.ptreeusa.com/ttrack_knobs_bolts.html)
- [Unusual Round Displays and How to Use Them](https://youtube.com/watch?v=FUU0CAjp1OQ&si=UcEB3_FKxkY1a_-c)
- [ANO Directional Navigation and Scroll Wheel Rotary Encoder](https://www.adafruit.com/product/5001)
- [AnySkin: Plug-and-play Skin Sensing for Robotic Touch](https://any-skin.github.io/)
- [connect old school joystick to arduino](https://www.instructables.com/DB-15-Joystick-Adapter-Device-With-Arduino/)

## Fidget Toys

- [Fidgets on Printables.com](https://www.printables.com/search/models?ctx=models&q=fidget)
- [Fidgets on Printables.com](https://www.printables.com/contest/77-fidget-toys)
- [Fidgets on Cults3d.com](https://cults3d.com/en/search?q=fidget)
- [Fidgets on Thingverse.com](https://www.thingiverse.com/search?q=fidget&page=1#google_vignette)
- [Fidgets on Thangs.com](https://thangs.com/search/fidget?scope=all)
- [Fidgets on Makerworld.com](https://makerworld.com/en/search/collections?keyword=fidget)
- [https://makerworld.com/en/models/71654-fidget-cock_n_pull](https://makerworld.com/en/models/71654-fidget-cock_n_pull)
- [Darshan Patel on Instagram: "7 Satisfying 3D-Printed Fidget Toys You’ve Never Seen\!](https://www.instagram.com/reel/DIf2WV2TuBf/?igsh=bjk5eHAwaWk2cmpm)
- [Fidgets on YouTube](https://www.youtube.com/shorts/kx2nwlETbQQ)
- [Fidgets on YouTube 2](https://www.youtube.com/shorts/Z1blDYoQ8-A)
- [Snappy Switch Keychain](https://thangs.com/designer/Make%20Anything/3d-model/Snappy%20Switch%20Keychain-1313203)
- [magnet flipper](https://makerworld.com/en/models/1396684-super-swivel-fidgets-magnetic-slider-fidgets#profileId-1447836)
- [gear shifter](https://makerworld.com/en/models/1396684-super-swivel-fidgets-magnetic-slider-fidgets#profileId-1447836)

## Physical / Digital Prototyping Tools

- [Automotive-ui-prototyping-with-real-car-data](https://medium.com/@brambos/automotive-ui-prototyping-with-real-car-data-b8cab3bc0621)
- [https://edges.ideo.com/posts/figproxy](https://edges.ideo.com/posts/figproxy)
- [https://microflow.vercel.app/](https://microflow.vercel.app/)

# Reference: Readings

## Books

- Game
  - [Game Feel: A Game Designer's Guide to Virtual Sensation](https://archive.org/details/game-feel) by Steve Swink, 2008
- UX Design
  - [The Design of Everyday Things](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things) By Donald Norman, 1988
  - [Don’t Make Me Think, A Common Sense Approach to Web (and Mobile) Usability](https://sensible.com/dont-make-me-think/) by Steve Krug, 2014
  - [Validating Product Ideas Through Lean User Research](https://rosenfeldmedia.com/books/lean-user-research/) by Tomer Sharon, 2016
  - [Web Form Design](https://rosenfeldmedia.com/books/web-form-design/) By Luke Wroblewski 2008
- Physical Computing
  - [Tangible User Interfaces: Past, Present and Future Directions](https://cs.wellesley.edu/~oshaer/TUI_NOW.pdf) by Orit Shaer and Eva Hornecker, 2010
  - [Physical Computing: Sensing and Controlling the Physical](https://archive.org/details/physicalcomputin0000osul), by Tom Igoe and Dan O'Sullivan, 2004
  - [Smart Things: Ubiquitous Computing User Experience Design](https://archive.org/details/smartthingsubiqu0000kuni) by Mike Kuniavsky, 2010
  - [Haptic Interaction Design for Everyday Interfaces](https://web.stanford.edu/class/me327/readings/MacLean08-RHFE-Design.pdf) by Karon E MacLean, 2008
  - [Playful Wearables: Understanding the Design Space of Wearables for Games and Related Experiences](https://mitpress.mit.edu/9780262546911/playful-wearables/) by
    By Oğuz Buruk, Ella Dagan, Katherine Isbister, Elena Márquez Segura and Theresa Jean Tanenbaum, 2024

## Essays, Articles

- [https://notbor.ing/words/the-most-satisfying-checkbox](https://notbor.ing/words/the-most-satisfying-checkbox)
- [https://www.uxmatters.com/mt/archives/2017/03/3-kinds-of-simplicity.php](https://www.uxmatters.com/mt/archives/2017/03/3-kinds-of-simplicity.php)
- [https://turbek.com/articles/2012/usability-of-coffee.html](https://turbek.com/articles/2012/usability-of-coffee.html)
- [ACM International Conference on Tangible, Embedded and Embodied Interaction](https://tei.acm.org/2025/about/about)
- [Haptic UX — The Design Guide for Building Touch Experiences](https://medium.muz.li/haptic-ux-the-design-guide-for-building-touch-experiences-84639aa4a1b8) by Justin Baker, 2019
- [International Conference on Tangible Embedded and Embodied Interaction](https://tei.acm.org)

# Reference: Design Process

There are LOTS of diagrams to convey some intangible ideas and best practices of design.

- [https://www.uxbeginner.com/ux-design-processes/](https://www.uxbeginner.com/ux-design-processes/)
- [figma Design-Process---Double-Diamond](<https://www.figma.com/design/bzcOKTm4IUs733LrS4gnex/Design-Process---Double-Diamond-(Community)?node-id=0-1&p=f&t=cOMQyqwtMhjszNnE-0>)
- [https://www.designcouncil.org.uk/our-resources/the-double-diamond/](https://www.designcouncil.org.uk/our-resources/the-double-diamond/)
- [https://thedesignsquiggle.com/about](https://thedesignsquiggle.com/about)

## Accessibility and Inclusive Design Resources

- [Microsoft’s Inclusive Design Principles](https://inclusive.microsoft.design/)
- [W3C: Designing for accessibility](https://www.w3.org/WAI/tips/designing/)
- Detailed criteria: [W3C’s WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/)
- Focus management: [Microsoft – A11y \- Focus Order](https://www.figma.com/community/plugin/731310036968334777/a11y-focus-order)
- Text resizing plugin: [Text Resizer \- Accessibility Checker](https://www.figma.com/community/plugin/892114953056389734/text-resizer-accessibility-checker)

## Figma plugins for accessibility

- Color contrast & vision simulator: [Stark – Contrast & Accessibility Checker](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker)
- Accessibility annotation: [Introduction to design annotation](https://medium.com/@snowjackband/annotating-considerations-for-accessibility-in-figma-4f8185a6779c)
- Duque Systems – [axe for Designers: A Free Accessibility Plugin](https://www.figma.com/community/plugin/1085612091163821851/axe-for-designers-a-free-accessibility-plugin)
- eBay – [Include—Accessibility Annotations](https://www.figma.com/community/plugin/1208180794570801545/includeaccessibility-annotations)
- Indeed – [A11y Annotation Kit](https://www.figma.com/community/file/953682768192596304/a11y-annotation-kit)
- Intopia – [accessibility annotation kit](https://www.figma.com/community/file/1022394680250523675/intopias-accessibility-annotation-kit)
