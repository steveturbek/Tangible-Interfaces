// @ts-nocheck
// Simple wireless messaging between two micro:bits using the radio.
// Press button A to send a message; received messages display on the LED screen.

// --- Setup ---
radio.setGroup(1);

// --- Event Handlers ---
// Sends a message when button A is pressed
input.onButtonPressed(Button.A, function () {
  radio.sendString("Micro Chat");
});

// Runs when a radio message is received
radio.onReceivedString(function (receivedString: string) {
  basic.showString(receivedString);
});
