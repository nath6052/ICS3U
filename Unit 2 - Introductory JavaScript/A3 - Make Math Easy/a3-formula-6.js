// Pythagorean Theorem
// 6 out of 6 Mathematical Equations, Nathan Hernandez 


// Here's a way to do it with Math.sqrt and Math.pow together
let mathCalculation = Math.sqrt(Math.pow(6,2)) + Math.pow(4, 2);
console.log(mathCalculation);


// Here's a way to do it without Math.pow
/* 
let mathCalculation_withoutPow = Math.sqrt(6 * 6) + (4 * 4);

console.log('Here\'s the calculation without Pow: '+mathCalculation_withoutPow);
*/


/**
 * Why is there a Math.pow?
 * Math.pow was a really useful tool in this program because it actually lets me have A and B multiplied by themselves 2 times (exponent)
 * 3 * 2 = 6
 * (with Math.pow / Exponent)
 * 3 * 3 = 9
 */