// BMI Formula - This time, it asks you! Nathan Hernandez (2019)

let ask = require("../ask.js");

let name, height, weight
name = ask("What is your name?");
height = ask("What is your height in meters?");
weight = ask("How much do you weigh in kilograms?")
console.log("This program doesn't log your information, you can use different information rather than your own — if you do not feel comfortable.");

let bmi = weight / Math.sqrt(Math.pow(height,2));
console.log('Your BMI is' + ' ' +bmi);
