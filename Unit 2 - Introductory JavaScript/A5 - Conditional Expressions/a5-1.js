let ask = require("../ask.js");

let number = ask('Enter a number between 1 and 5.');

if (number > 5) {
  console.log('Your number was over 5. Please use a number between 1 and 5.');
}

if (number < 1) {
  console.log('Your number was lower than 1. Please use a number between 1 and 5.');
}

if (number == 1) {
  console.log("Your number is One.");
}

if (number == 2) {
  console.log("Your number is Two.");
}

if (number == 3) {
  console.log("Your number is Three.");
}

if (number == 4) {
  console.log("Your number is Four.");
}

if (number == 5) {
  console.log("Your number is Five.");
}
