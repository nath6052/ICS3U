let ask = require("../ask.js");


let a = ask('First number?'); 
let b = ask('Second number?');
let c = ask('Third number?');

let p = a + b + c; 

console.log('The perimeter of a triangle is '+p);
