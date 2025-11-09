# Tangible Interfaces Book Proposal

## Elevator Pitch

Like in the book "[Flatland](https://en.wikipedia.org/wiki/Flatland)", UX design has been trapped in a 2 dimensional world of glowing rectangles, yet a fascinating "third" dimensional world exists for designers to explore. This book introduces "Tangible Interface Design", or UX Design for the real world.

This book takes a strategic overview of designing interactive physical products, from what made the iPod successful to why safety studies show touchscreens make cars more dangerous. In an era where so many products are just apps and so many apps look the same, Tangible Interface design shows how physical design can engage all our human senses to create delightful products.

The book surveys the opportunities and issues for designing smart objects, from home electronics to vehicle design. Each chapter covers a strategic industrial design issue, which is illustrated with a practical how-to guide for prototyping a physical interface. Examples include real world accessibility and ergonomics, to interpreting ambiguous sensor data. In many ways, this book is also a recognition of how amazing the human body is, with our brains, senses, and coordinated muscles.

Prototyping interaction has been challenging for the designer due to the inherent complexity of software. Today's AI, properly used with techniques demonstrated in this book, can empower the designer to take on complex hardware and software challenges including working with data. This book hopes to share the fun of expanding UX design in the real world; the focus is on prototyping, not final electronic engineering, but advanced directions for learning are provided.

The book is designed as a stand alone work of ideas and process, but it includes online library of code and instructions that work with an open source kit of electronics sensors and motors. This site contains step-by-step instructions that make getting started easily, no coding or electronics experience expected.

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
- What's new/different in designing tangible interfaces than on-screen UX
- Who this book is for (prototypers, startup idea folks, hobbyists, students)
- Who this book is NOT for (electrical engineers)
- Why this author (and not an electrical engineer)?

### Foundations

- What is physical computing (sensors, actuators, embedded systems) — basics
- Key UX principles when you go physical (affordance, ergonomics, context, feedback loops)
- The physical-digital interface: bridging hardware + software + UI
- Accessibility for all: What are tools for?

### Prototyping as a Design Philosophy

- Why write a design book about prototypes?
- What is a prototype and why make them?
- Learning through making
- Don't fail fast, learn fast
- Why designers fear usability tests
- Knowing something vs. knowing about something? - the designers challenge

### Strategic Design Decisions

#### When to Go Physical vs. Screen

- Decision frameworks: context, safety, frequency of use, and user capability
- The cost-benefit analysis of physical controls (manufacturing vs. software updates)
- Hybrid approaches: screens + physical controls working together
- Environmental factors: lighting, moisture, temperature, mobility
- User expertise levels: novice vs. expert interfaces

#### Business & Product Strategy for Physical Interfaces

- Manufacturing realities: tooling costs, supply chains, and iteration constraints
- The software update paradox: screens enable fixes, physical controls force quality
- Premium positioning through tactile design (audio equipment, automotive, luxury goods)
- Sustainability considerations: repairability, longevity, e-waste
- Market differentiation in an app-dominated world

#### Physical Design as Brand Language

- Case study: Apple's click wheel as brand signature
- How physical interfaces communicate quality and values
- Tactile brand identity: what your buttons say about your company
- The psychology of weight, materials, and mechanical feel
- Consistency across product lines vs. context-specific design

#### Comparative Analysis Across Product Categories

- **Automotive**: The touchscreen backlash and return to physical controls
- **Audio equipment**: Why mixing boards stayed physical while recording went digital
- **Medical devices**: Regulatory and safety requirements driving physical interfaces
- **Kitchen appliances**: The thermostat, timer, and power button decisions
- **Accessibility devices**: When physical is the only option
- **Gaming controllers**: The evolution and persistence of buttons + analog sticks

#### Learning from Success and Failure

- Why the iPod succeeded while the Zune failed (beyond marketing)
- Tesla's minimalism vs. traditional automotive: usability implications
- The Nest thermostat: making the physical interface beautiful again
- Smart home devices: when voice/app control creates more friction
- Wearables: the constraint-driven innovation of limited physical space

### Intelligence, artificial and natural

- A brief note on how we'll use artificial intelligence
- Why we'll not be building AIs or robots in this program
- The amazing abilities of the human body
- Electronics & Hardware: The strengths and the weaknesses
- The missing context between designing the user experience and the physical world

### Prototyping Tools & Materials

- Microcontrollers, sensors, actuators, prototyping boards (Microbit, Arduino, Raspberry Pi, etc)
- Fabrication / materials / 3D printing / wearables / IoT hardware
- Tools UX designers can use (without being full engineers)

### Interaction Design for Physical Devices

This section presents concepts exploring a fundamental principle of tangible interface design. A paired workshop exercise demonstrated learning through hands-on prototyping, with an online code resource.

#### 1. Tactile Satisfaction: Understanding Feel and Feedback

**Concept:** What makes something satisfying to touch? Explore the principles of haptic design through texture, weight, resistance, and mechanical feedback. From fidget toys to precision controls, physical sensation drives engagement.

**Case Study:** The mechanical keyboard renaissance. Despite being "obsolete" technology, mechanical keyboards command premium prices because typing feel matters. Cherry MX switches, tactile bumps, and acoustic feedback create satisfaction that membrane keyboards can't match. Gaming and programming communities drove a market revival based purely on tactile preference.

**Workshop:** Design and 3D print a fidget toy that explores different tactile sensations. Iterate on weight distribution, surface texture, and mechanical action. Test with users to identify what feels "right."

**Key Principles:** Haptic feedback, mechanical advantage, ergonomics, material choice

#### 2. Sensing the World: Analog Input and Ambiguity

**Concept:** Unlike digital buttons, analog sensors provide continuous, often noisy data. Learn to interpret potentiometers, light sensors, and distance sensors. Understand signal smoothing, thresholds, and how to design interactions around imperfect data.

**Case Study:** The Nest Learning Thermostat. Rather than forcing users to program schedules, Nest uses temperature sensors, motion detection, and learning algorithms to interpret ambiguous occupancy data. The interface abstracts away sensor noise, presenting simple up/down controls while the system handles the complexity of predicting user needs from imperfect inputs.

**Workshop:** Create a simple media controller using an analog sensor (potentiometer or light sensor). Implement basic data smoothing and map sensor values to control functions.

**Key Principles:** Signal processing, threshold design, data smoothing, mapping analog to digital actions

#### 3. Rotary Controls: The Power of the Dial

**Concept:** Rotary encoders and potentiometers offer intuitive control for continuous values like volume and brightness. Study what makes dials feel premium (detents, resistance, visual feedback) versus cheap. Examine historical examples from audio equipment.

**Case Study:** The iPod click wheel. Apple's iconic scroll wheel combined rotary input with tactile clicks and visual feedback. The circular motion felt natural for scrolling long lists, while the satisfying detent clicks provided confirmation without looking. This single interface element became synonymous with the brand and demonstrated how superior physical design could differentiate in a crowded market.

**Workshop:** Build a volume control using a rotary encoder or potentiometer. Experiment with different physical knob designs. Add visual or haptic feedback to enhance the experience.

**Key Principles:** Rotary encoding, detent design, continuous vs. stepped input, knob feel

#### 4. Physical Buttons vs. Touch: The Car Dashboard Debate

**Concept:** Why are touchscreens in cars now considered dangerous? Analyze the ergonomic and safety implications of physical vs. touch controls. Explore eyes-free operation, muscle memory, and haptic landmarks.

**Case Study:** The automotive industry's touchscreen reversal. Tesla pioneered the minimalist touchscreen dashboard, and others followed. However, safety studies showed touchscreens increased driver distraction. By 2023, manufacturers like BMW, Volkswagen, and Hyundai began reintroducing physical buttons for climate and volume controls. The European New Car Assessment Programme (Euro NCAP) now penalizes touchscreen-only controls in safety ratings, validating that physical buttons aren't just preference—they're safer.

**Workshop:** Design a simple control interface for a specific use case (driving, medical, food service). Compare button-based vs. touch-based approaches. Test for eyes-free usability.

**Key Principles:** Contextual design, safety-critical interfaces, affordances, blind operation

#### 5. Motion and Gesture: Accelerometers and Spatial Input

**Concept:** Accelerometers and gyroscopes enable gesture-based interaction. Learn to design for tilt, shake, and rotation. Consider calibration, gesture recognition, and the difference between intentional and incidental movement.

**Case Study:** Nintendo Wii's motion controls. The Wii Remote revolutionized gaming by making motion the primary input. However, it also revealed gesture design challenges: imprecise movements, calibration drift, and the "waggle problem" where players could cheat by shaking randomly instead of performing intended gestures. Later iterations added the MotionPlus accessory for higher precision, showing how gesture interfaces require careful tuning between accessibility and accuracy.

**Workshop:** Create a tilt-based game or control system using the micro:bit's built-in accelerometer. Design gestures that feel natural and test their reliability.

**Key Principles:** Gesture design, motion sensing, calibration, false positive prevention

#### 6. Distance and Proximity: Sensing Space

**Concept:** Ultrasonic and infrared sensors detect presence and distance. Applications range from automatic doors to musical instruments. Understand range limitations, beam angles, and designing around environmental interference.

**Case Study:** Theremin and modern contactless instruments. The Theremin, invented in 1920, used proximity sensing to create music through hand position in electromagnetic fields. Modern versions like the INSTRUMENT 1 and Genki Wave use distance sensors to enable expressive, touchless performance. These instruments demonstrate how proximity sensing can create intimate, nuanced control—but also how environmental factors (clothing, lighting, nearby objects) can interfere with sensor reliability.

**Workshop:** Build a proximity-aware device using an ultrasonic sensor. Map distance to servo position or LED brightness. Create an interface that responds to approach/withdrawal.

**Key Principles:** Proximity sensing, spatial interaction, range mapping, environmental factors

#### 7. Output Beyond Screens: LEDs, Servos, and Sound

**Concept:** Physical outputs create richer feedback than screens alone. LEDs provide ambient information, servos create motion, speakers add audio. Learn when to use each modality and how to combine them.

**Case Study:** Amazon Echo's LED ring. Rather than requiring users to look at a screen, the Echo uses a colored LED ring to communicate status: blue rotating for listening, red for muted, pulsing yellow for notifications. This ambient feedback works from any angle and doesn't demand full attention. Combined with audio responses and the physical action of the ring lighting, it creates a multimodal interface that feels more responsive than screen-only alternatives.

**Workshop:** Design a notification device that uses non-screen outputs. Use LEDs for status, servos for physical motion, and buzzers for alerts. Consider ambient vs. attention-demanding feedback.

**Key Principles:** Multi-modal feedback, ambient computing, attention management, output selection

#### 8. Prototyping Strategy: "Looks Like" vs. "Works Like"

**Concept:** Professional designers separate form exploration from functional testing. A "looks like" prototype validates size, shape, and ergonomics. A "works like" prototype tests interaction and electronics. Understanding when to build which type accelerates iteration.

**Case Study:** Dyson's vacuum development process. James Dyson famously built 5,127 prototypes before perfecting the cyclonic vacuum. Early prototypes were "works like" models testing cyclone technology using cardboard and tape. Later prototypes shifted to "looks like" models refining ergonomics, weight distribution, and aesthetics. By separating these concerns, Dyson could rapidly iterate on function without expensive tooling, then polish the form once the technology worked.

**Workshop:** Create both prototype types for a wearable remote control. Build an oversized "works like" version to test electronics and code, plus a properly sized "looks like" model to evaluate wearability.

**Key Principles:** Rapid prototyping, separation of concerns, iterative design, form vs. function

#### 9. Wireless Communication: Creating Connected Devices

**Concept:** Bluetooth enables devices to control phones and computers, or communicate with each other. Understand pairing, HID profiles, and basic wireless architecture. Design for connection states (paired, searching, disconnected).

**Case Study:** Apple AirPods pairing experience. Traditional Bluetooth pairing was notoriously frustrating—holding buttons, navigating menus, re-pairing after disconnections. Apple's H1 chip and iCloud integration reduced pairing to opening the case near an iPhone. The "magic" was careful attention to connection state design: visual feedback on both device and phone, seamless switching between devices, and graceful handling of connection loss. The lesson: wireless complexity should be hidden from users, not exposed.

**Workshop:** Build a Bluetooth media remote control. Implement pairing, basic media controls, and feedback for connection status. Test with multiple devices (phone, laptop).

**Key Principles:** Wireless protocols, device pairing, connection management, cross-platform compatibility

#### 10. User Context and Constraints: Designing for Real Needs

**Concept:** The best interfaces solve real problems in specific contexts. Operating rooms require sterile controls. Motorcycles need handlebar-mounted interfaces. Users with limited mobility need alternative input methods. Constraints drive innovation.

**Case Study:** Xbox Adaptive Controller. Designed for gamers with limited mobility, this controller features large programmable buttons, ports for external switches, and mounting options. Rather than trying to modify standard controllers, Microsoft designed from constraints: users who can't grip small buttons, who need one-handed operation, or who use assistive switches. The result works better for its target users than any adaptation of existing designs could. The constraint-first approach created innovation that standard "accessible options" never achieved.

**Workshop:** Research a specific user context (surgery, cycling, accessibility need) and design a remote control for that scenario. Conduct user research to validate assumptions. Present final design with context documentation.

**Key Principles:** User research, contextual inquiry, accessibility, constraint-driven design

#### 11. Bridging Physical and Digital: Connected UX Design

**Concept:** Physical interfaces become more powerful when connected to digital systems. A button press can trigger animations, sensor data can drive visualizations, and screen interfaces can provide feedback for physical actions. Understanding how to design across both domains—and the communication protocols between them—enables richer interactive experiences.

**Case Study:** Guitar Hero and Rock Band controllers. These games succeeded by creating physical controllers that felt like real instruments while connecting seamlessly to on-screen gameplay. The tactile satisfaction of clicking fret buttons and strumming combined with visual feedback, score tracking, and synchronized audio. The physical controller didn't replicate a real guitar—it created a new hybrid experience that was satisfying precisely because it bridged physical input with digital response.

**Workshop:** Build a tangible interface video game controller. Using the Figma plugin (from class resources), design the on-screen UI that responds to physical inputs from sensors and buttons. Create a simple game where physical actions (button presses, sensor movements) control digital elements. Focus on the feedback loop: how does the screen confirm physical actions? How does digital state influence what physical inputs do?

**Key Principles:** Serial communication, input mapping, real-time feedback, cross-domain UX design, state synchronization

**Tools & Resources:**

- Tangible Interfaces Figma Plugin (class resources)
- Serial communication protocols (USB, Bluetooth)
- Game development frameworks that accept external input
- Debugging tools for physical-digital communication

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

## Writings by steve, for reference

- [3 Kinds of Simplicity](http://www.uxmatters.com/mt/archives/2017/03/3-kinds-of-simplicity.php)
- [Dark Magic in User-Interface Design](https://www.uxmatters.com/mt/archives/2018/12/resisting-the-lure-of-dark-magic-in-user-interface-design.php)
- [Make the Commercial First](http://boxesandarrows.com/make-the-commercial-first/)
- [Plateaus are Harder Than Mountains](https://boxesandarrows.com/plateaus-are-harder-than-mountains/)

## Additional Resources

### Book Lists

- [NYU ITP Physical Computing Books](https://itp.nyu.edu/physcomp/resources/books/)
- [Goodreads Physical Computing Shelf](https://www.goodreads.com/shelf/show/physical-computing)

### Blogs

- [Teaching Emerging Technologies to UX Designers](https://uxdesign.cc/teaching-emerging-technologies-to-ux-designers-c2d329ff83cd)
- [Fabien Girardin's Medium](https://girardin.medium.com/)
- [Physical First: Rethinking UX for Spatial Computing](https://www.xraispotlight.com/physical-first-rethinking-ux-for-spatial-computing/) - Focused on spatial computing/metaverse

### Education Programs

- [NYU ITP Physical Computing](https://itp.nyu.edu/physcomp/)
- [Pratt Institute\*\* Interactive Arts (Digital Arts MFA)](https://www.pratt.edu/art/digital-arts-and-animation/interactive-arts-digital-arts-mfa/)
- [Carnegie Mellon University - IDeATe Physical Computing Minor](https://ideate.cmu.edu/undergraduate-programs/physical-computing/index.html)
- [Parsons School of Design](https://www.newschool.edu/parsons/bfa-design-technology/)
- [NY School of Visual Arts](https://sva.edu/academics/graduate/mfa-interaction-design)
- [MIT Physical Computing for Artists](https://arts.mit.edu/computing-through-art/)
- [ArtCenter College of Design - Interaction Design BS](https://www.artcenter.edu/academics/undergraduate-degrees/interaction-design/overview.html)
- [University of Washington - Interactive Design Program](https://art.washington.edu/design/bdes-interaction-design)
- [Stanford University (d.school) - Product Design and Hasso Plattner Institute](https://dschool.stanford.edu)
- [Potsdam Interaction Design Lab](https://idl.fh-potsdam.de)
