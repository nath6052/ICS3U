let ask = require("../ask.js");

let firstNumber = ask('Enter a number.');
let secondNumber = ask('Enter a second number.');
let thirdNumber = ask("Enter a third number.");

if (firstNumber > secondNumber && thirdNumber) {
  console.log("The number" + ' '+firstNumber + ' ' + "is higher than" +' ' +secondNumber +'  ' + 'and' + ' ' +thirdNumber);
} 


if (secondNumber > firstNumber && thirdNumber) {
  console.log("The number" + ' '+secondNumber + ' ' + "is higher than" +' ' +firstNumber +'  ' + 'and' + ' ' +thirdNumber);
}


if (thirdNumber > firstNumber && secondNumber) {
  console.log("The number" + ' '+thirdNumber + ' ' + "is higher than" +' ' +firstNumber +'  ' + 'and' + ' ' +secondNumber);
}

