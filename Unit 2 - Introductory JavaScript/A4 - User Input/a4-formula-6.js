// Pythagorean Theorem - Ask
let ask = require("../ask.js");

console.log("You'll be solving for C.")

let aVariable = ask("Enter the variable for A: "); 
let bVariable = ask("Enter the variable for B: ");

let mathCalculation = Math.sqrt(Math.pow(aVariable,2)) + Math.pow(bVariable, 2);

console.log("C is: "+mathCalculation);