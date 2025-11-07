# Tangible Interfaces Book Proposal

## Elevator Pitch

Like in the book "Flatland", UX design has been trapped in a 2 dimensional world of glowing rectangles, yet a fascinating "third" dimensional world exists for designers to explore. This book introduces "Tangible Interface Design", or UX Design for the real world.

This book takes a strategic overview of designing interactive physical products, from what made the iPod successful to why safety studies show touchscreens make cars more dangerous. In an era where so many products are just apps and so many apps look the same, Tangible Interface design shows how physical design can engage all our human senses to create delightful products.

The book surveys the opportunities and issues for designing smart objects, from home electronics to vehicle design. Each chapter covers a strategic industrial design issue, which is illustrated with a practical how-to guide for prototyping a physical interface. Examples include real world accessibility and ergonomics, to interpreting ambiguous sensor data.

Prototyping interaction has been challenging for the designer due to the complexity of software. Today's AI, properly used with techniques demonstrated in this book, can empower the designer to take on complex hardware and software challenges including working with data.

The book is designed to work with an open source educational kit of electronics sensors and motors, each with step-by-step instructions that make getting started easily, no coding or electronics experience expected. This book hopes to share the fun of expanding UX design in the real world; the focus is on prototyping, not final electronic engineering, but advanced directions for learning are provided.

## Potential Titles

- UX Design for the real world
- Tangible interfaces
- Designing interactive device devices
- Designing Collaborative objects
- Prototyping The Physical User Experience
- Beyond the Screen: UX Design for Physical Interfaces
- Touch, Feel, Interact: Physical UX Design
- Tangible UX: Designing Interactive Objects

## Intended Audience

UX designers who want to prototype a startup product, build job skills for working with engineers, or simply have fun hacking to expand their understanding of how interaction design applies, and differs, in the real world. The book could also serve as a text book, as there are many high school/college intro to electronics classes.

## Competitive Research

Lists below, but there hasn't been a book on this in 10-15 years!

Most recent books focus either on:

- Pure electronics/engineering (Arduino cookbooks)
- Screen-based UX design
- Specific domains (wearables, IoT products)

This book fills the gap for UX designers who want to work with physical interfaces.

## Placeholder Book Structure

### Introduction

- Why physical computing matters for UX designers
- What's new/different compared to screen-only UX
- Who this book is for (hobbyists, prototypers, startup idea folks)

### Foundations

- What is physical computing (sensors, actuators, embedded systems) — basics
- Key UX principles when you go physical (affordance, ergonomics, context, feedback loops)
- The physical-digital interface: bridging hardware + software + UI

### Prototyping Tools & Materials

- Microcontrollers, sensors, actuators, prototyping boards (Arduino, Pi etc)
- Fabrication / materials / 3D printing / wearables / IoT hardware
- Tools UX designers can use (without being full engineers)

### Interaction Design for Physical Devices

This section presents 10 concept-workshop pairs, each exploring a fundamental principle of tangible interface design through hands-on prototyping.

#### 1. Tactile Satisfaction: Understanding Feel and Feedback

**Concept:** What makes something satisfying to touch? Explore the principles of haptic design through texture, weight, resistance, and mechanical feedback. From fidget toys to precision controls, physical sensation drives engagement.

**Workshop:** Design and 3D print a fidget toy that explores different tactile sensations. Iterate on weight distribution, surface texture, and mechanical action. Test with users to identify what feels "right."

**Key Principles:** Haptic feedback, mechanical advantage, ergonomics, material choice

#### 2. Sensing the World: Analog Input and Ambiguity

**Concept:** Unlike digital buttons, analog sensors provide continuous, often noisy data. Learn to interpret potentiometers, light sensors, and distance sensors. Understand signal smoothing, thresholds, and how to design interactions around imperfect data.

**Workshop:** Create a simple media controller using an analog sensor (potentiometer or light sensor). Implement basic data smoothing and map sensor values to control functions.

**Key Principles:** Signal processing, threshold design, data smoothing, mapping analog to digital actions

#### 3. Rotary Controls: The Power of the Dial

**Concept:** Rotary encoders and potentiometers offer intuitive control for continuous values like volume and brightness. Study what makes dials feel premium (detents, resistance, visual feedback) versus cheap. Examine historical examples from audio equipment.

**Workshop:** Build a volume control using a rotary encoder or potentiometer. Experiment with different physical knob designs. Add visual or haptic feedback to enhance the experience.

**Key Principles:** Rotary encoding, detent design, continuous vs. stepped input, knob feel

#### 4. Physical Buttons vs. Touch: The Car Dashboard Debate

**Concept:** Why are touchscreens in cars now considered dangerous? Analyze the ergonomic and safety implications of physical vs. touch controls. Explore eyes-free operation, muscle memory, and haptic landmarks.

**Workshop:** Design a simple control interface for a specific use case (driving, medical, food service). Compare button-based vs. touch-based approaches. Test for eyes-free usability.

**Key Principles:** Contextual design, safety-critical interfaces, affordances, blind operation

#### 5. Motion and Gesture: Accelerometers and Spatial Input

**Concept:** Accelerometers and gyroscopes enable gesture-based interaction. Learn to design for tilt, shake, and rotation. Consider calibration, gesture recognition, and the difference between intentional and incidental movement.

**Workshop:** Create a tilt-based game or control system using the micro:bit's built-in accelerometer. Design gestures that feel natural and test their reliability.

**Key Principles:** Gesture design, motion sensing, calibration, false positive prevention

#### 6. Distance and Proximity: Sensing Space

**Concept:** Ultrasonic and infrared sensors detect presence and distance. Applications range from automatic doors to musical instruments. Understand range limitations, beam angles, and designing around environmental interference.

**Workshop:** Build a proximity-aware device using an ultrasonic sensor. Map distance to servo position or LED brightness. Create an interface that responds to approach/withdrawal.

**Key Principles:** Proximity sensing, spatial interaction, range mapping, environmental factors

#### 7. Output Beyond Screens: LEDs, Servos, and Sound

**Concept:** Physical outputs create richer feedback than screens alone. LEDs provide ambient information, servos create motion, speakers add audio. Learn when to use each modality and how to combine them.

**Workshop:** Design a notification device that uses non-screen outputs. Use LEDs for status, servos for physical motion, and buzzers for alerts. Consider ambient vs. attention-demanding feedback.

**Key Principles:** Multi-modal feedback, ambient computing, attention management, output selection

#### 8. Prototyping Strategy: "Looks Like" vs. "Works Like"

**Concept:** Professional designers separate form exploration from functional testing. A "looks like" prototype validates size, shape, and ergonomics. A "works like" prototype tests interaction and electronics. Understanding when to build which type accelerates iteration.

**Workshop:** Create both prototype types for a wearable remote control. Build an oversized "works like" version to test electronics and code, plus a properly sized "looks like" model to evaluate wearability.

**Key Principles:** Rapid prototyping, separation of concerns, iterative design, form vs. function

#### 9. Wireless Communication: Creating Connected Devices

**Concept:** Bluetooth enables devices to control phones and computers, or communicate with each other. Understand pairing, HID profiles, and basic wireless architecture. Design for connection states (paired, searching, disconnected).

**Workshop:** Build a Bluetooth media remote control. Implement pairing, basic media controls, and feedback for connection status. Test with multiple devices (phone, laptop).

**Key Principles:** Wireless protocols, device pairing, connection management, cross-platform compatibility

#### 10. User Context and Constraints: Designing for Real Needs

**Concept:** The best interfaces solve real problems in specific contexts. Operating rooms require sterile controls. Motorcycles need handlebar-mounted interfaces. Users with limited mobility need alternative input methods. Constraints drive innovation.

**Workshop:** Research a specific user context (surgery, cycling, accessibility need) and design a remote control for that scenario. Conduct user research to validate assumptions. Present final design with context documentation.

**Key Principles:** User research, contextual inquiry, accessibility, constraint-driven design

### UX Research & Testing in Physical Prototypes

- How to test physical prototypes with users
- Iteration cycles: build → test → refine
- Low-fidelity physical prototypes vs high-fidelity, when and how

### From Prototype to Product / Startup Mindset

- Validating ideas cheaply
- MVPs for physical computing systems
- Scaling from hobby prototype to product / manufacturing basics
- Business/UX strategy side: understanding users, costs, contexts

### Case Studies / Project Walk-throughs

- Example hobby/startup projects: what they did, UX decisions, hardware decisions
- Lessons learnt

### Future Directions

- Emerging materials, sensors, spatial computing, ambient computing
- The intersection with IoT, wearables, spatial/3D computing
- Where hobbyist + startup prototypes are going

### Appendices / Resources

- Recommended reading (books, blogs, YouTube)
- Tutorials & starter kits
- Glossary of hardware/UX terms

## Interaction Design & Physical Computing Sources

### Design & Interaction Fundamentals

- **A Touch of Code: Interactive Installations and Experiences** by Robert Klanten, Sven Ehmann, Verena Hanschke (2011)
- **Tactics of Interfacing: Encoding Affect in Art and Technology** by Ksenia Fedorova (2020)
- **Designing for Interaction: Creating Smart Applications and Clever Devices** by Dan Saffer (2009)
- **Understanding Industrial Design: Principles for UX and Interaction Design** by Simon King, Kuen Chang (2016)
- **How to Speak Machine: Computational Thinking for the Rest of Us** by John Maeda (2019)
- **Prototyping for Designers** by Kathryn McElroy (O'Reilly)
- **Designing for Emerging Technologies**
- **The Design of Everyday Things** by Donald A. Norman (2013, Revised and Expanded Edition)

### Physical Computing & Electronics

- **Making Things Talk: Using Sensors, Networks, and Arduino to see, hear, and feel your world** by Tom Igoe (2011)
- **Physical Computing: Sensing and Controlling the Physical World with Computers** by Dan O'Sullivan, Tom Igoe (2004)
- **When Things Start to Think** by Neil Gershenfeld (1999)
- **Designing the Internet of Things** by Adrian McEwen (2013)
- **Make: Electronics (Learning by Discovery)** by Charles Platt (2008, 3rd edition 2021)
- **Programming Interactivity: A Designer's Guide to Processing, Arduino, and OpenFrameworks** by Joshua Noble (2009)
- **Getting Started with Arduino (Make: Projects)** by Massimo Banzi (2008)
- **Timer, Op Amp, and Optoelectronic Circuits & Projects** by Forrest M. Mims III
- **Handmade Electronic Music: The Art of Hardware Hacking** by Nicolas Collins

### Electronics References & Textbooks

- **Make: More Electronics** by Charles Platt (2009)
- **Encyclopedia of Electronic Components Volume 1: Resistors, Capacitors, Inductors, Switches, Encoders, Relays, Transistors** by Charles Platt (2012)
- **Getting Started in Electronics** by Forrest M. Mims III (1983)
- **There Are No Electrons: Electronics for Earthlings** by Ken Amdahl (1991)
- **Practical Electronics for Inventors** by Paul Scherz, Simon Monk (2016, 4th edition)

## Additional Resources

### Book Lists

- [NYU ITP Physical Computing Books](https://itp.nyu.edu/physcomp/resources/books/)
- [Goodreads Physical Computing Shelf](https://www.goodreads.com/shelf/show/physical-computing)

### Blogs

- [Teaching Emerging Technologies to UX Designers](https://uxdesign.cc/teaching-emerging-technologies-to-ux-designers-c2d329ff83cd)
- [Fabien Girardin's Medium](https://girardin.medium.com/)
- [Physical First: Rethinking UX for Spatial Computing](https://www.xraispotlight.com/physical-first-rethinking-ux-for-spatial-computing/) - Focused on spatial computing/metaverse

### Education Programs

- **NYU ITP** - [Physical Computing](https://itp.nyu.edu/physcomp/)
- **Pratt Institute** - [Interactive Arts (Digital Arts MFA)](https://www.pratt.edu/art/digital-arts-and-animation/interactive-arts-digital-arts-mfa/)
- **Carnegie Mellon University** - IDeATe Physical Computing Minor
- **Parsons School of Design**
- **MIT** - Physical Computing for Artists
- **ArtCenter College of Design** - Interaction Design BS
- **University of Washington** - Interactive Design Program
- **Stanford University (d.school)** - Product Design and Hasso Plattner Institute
