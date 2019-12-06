// Volume of a Cylinder - Nathan Hernandez 

let ask = require("../ask.js");

let h = ask('What is the height?');
const pi = 3.14; 
let r = ask("What is your Radius?"); 



let v = h * pi * Math.pow(r, 2);
console.log("The volume of the cylinder is"+ ' ' +v);