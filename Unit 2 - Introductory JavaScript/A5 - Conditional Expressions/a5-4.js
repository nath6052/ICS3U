// Nathan Hernandez
let ask = require("../ask.js");

let letter = ask("Enter in a letter from A to F.");

if (letter == 'A' || letter == 'E') {
console.log("You chose a Vowel.");
}

if (letter == 'B' || letter == 'C' || letter == 'D' || letter == 'F') {
  console.log("You chose a consonant.");
}

if (letter == 'A' || letter == 'B') {
  console.log('Good grade!')
} else {
  console.log('Poor Grade.');
}

if (letter == 'C' || letter == 'A' || letter == 'N' || letter == 'D') {
  console.log("The letter you picked is in the word Canada.");
  /** 
  There are 3 A's in Canada. This is unneccesary for this program. So I only added
  one A.
 */
} else {
  console.log("Your letter isn\'t in the word Canada, eh?");
}

if (letter == 'A' || letter == 'E' || letter == 'F' || letter == 'N') {
  console.log("This letter can be drawn without any curved lines.")
} else {
  console.log("This letter cannot be drawn without at least one or two curved lines.");
}

