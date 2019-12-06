let ask = require("../ask.js");

console.log('You\'ll be giving the program, the sides of your cube to determine the volume.');
let volOne = ask('What is the number of the first side of your cube?');
let volTwo = ask("What is the number of the second side of your cube?");
let volThree = ask("What is the number of the third side of your cube?");

let woah = (volOne * volTwo * volThree)
console.log('Your volume is' + ' ' + +woah);