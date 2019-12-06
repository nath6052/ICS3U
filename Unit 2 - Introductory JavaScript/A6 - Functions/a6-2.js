let ask = require("../ask.js");

function areaOfACircle(radius) {
  // Add code here to calculate and output the area
let radiusCode = 3.14 * (radius * radius);
console.log(radiusCode);
}

function volumeOfACube(side) {
  // Add code here to calculate and output the volume
let cubeCalculation = (side * side * side)
console.log('Your volume is' + ' ' + +cubeCalculation);

}

function perimeterOfATriangle(side1, side2, side3) {
  // Add code here to calculate and output the perimeter

let calculationTriangle = (side1 + side2 + side3) 
console.log(' The perimeter of your triangle is '+calculationTriangle);

}




// Don't edit anything below here. It will print a menu to allow
// the user to select which of your functions is run.
console.log("What do you want to calculate? ");
console.log("[1] The area of some circles");
console.log("[2] The volume of some cubes");
console.log("[3] The perimeter of some triangles");
console.log("");
let choice = ask("Enter your selection:");

if (choice == 1) {
  areaOfACircle(5);
  areaOfACircle(10);
  areaOfACircle(20);
}
if (choice == 2) {
  volumeOfACube(2);
  volumeOfACube(8);
  volumeOfACube(15);
}
if (choice == 3) {
  perimeterOfATriangle(2, 3, 4);
  perimeterOfATriangle(7, 8, 10);
  perimeterOfATriangle(25, 38, 43);
}