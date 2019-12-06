let ask = require("../ask.js");

let number = ask("Enter a number between 10 and 20.");

if (number < 10) {
  console.log('The number was lower than 10. Sorry, please try again.');
}

if (number > 20) {
  console.log('The number was higher than 20. Sorry, please try again.');
}

if (number >= 10 && number <= 20) {
  console.log('You entered a number between 10 and 20. Thank you!');
}