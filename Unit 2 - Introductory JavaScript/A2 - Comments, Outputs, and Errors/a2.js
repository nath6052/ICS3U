// Assignment 2 - Comments, Outputs, Errors

console.log("Welcome to JavaScript");
// Output: Welcome to JavaScript
// Why: This is your introduction to Strings. In JavaScript and many other languages, printing anything to the console can be either a variable, a string, or etc.
// When you use "", it's called a string. It's just to put words in.

/**
 * Example: 
 * console.log(WelcomeToJavaScript) - Output: variable not defined
 * console.log("WelcomeToJavaScript") - Output: WelcomeToJavaScript
 */

console.log(1+1);
// Output: 2
// Why: The Consoles in JS can do basic arithmetic. That's why 1 + 1 will output 2.

console.log(5+5-2);
// Output: 8 
// Why: The console will do 5 + 5, and then subtract 2. Which equals 8.

console.log(3*3+1);
// Output: 10 
// Why: The console will do 3 x 3, and then add 1. 
// More: 3 x 3: 9 + 1 = 10 

console.log(10+3*2);
// Output: 16 
// Why: The console will do 10 + 3 * 2.

console.log((10+3) *2);
// Output: 26 
// Why: The console will solve the first arithmetic section of the question which is 10 + 3, then after multiply by 2.
// 10 + 3 | 13 * 2 

console.log(10/5);
// Output: 2 
// Why: The console will divide 10 by 5, which will equal 2. 

console.log(5<6);
// Output: true
// Why: 6 is greater than 5.

console.log(5>6);
// Output: false
// Why: 5 is less than 6.

console.log(3==3);
// Output: true 
// Why: 3 is equal to 3.

console.log(3==4);
// Output: false
// Why: 3 is not equal to 4.

console.log(4!=4);
// Output: false
// Why: The "!=" operator means "not equal to".
// 4 does equal 4, so the Boolean and Console is false.

console.log("The secret number is "+23);
// Output: This will log an error.
// Why: There's no "+" after the string to make it add onto the latter.

console.log("The secret number is: "+23);
// Output: "The secret number is: 23"
// Why: The console will first put in the string to the console, then put the number after. 

console.log("The sum is "+(5+2));
// Output: "The sum is 7"
// Why: 5 + 2 = 7

console.log("The sum is "+5+2);
// Output: "The sum is 52"
// Why: It doesn't add them together, instead it'll put the 2 numbers.

// 5 + 2 
// +5+2
// For the second example, it's only adding those two numbers together beside the string. It's not a mathematical expression like 5 + 2, so it makes it 52.

console.log("======o     o======")
// Here's ASCII art of 2 drum sticks!