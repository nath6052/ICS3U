// Function Extensions

// Solve for C - Pythagoream Theorem
function pythTheorem(a, b) {
    console.log('The calculation is: ' +Math.sqrt(Math.pow(a, 2)) + Math.pow(b, 2));
  }
  
  console.log
  
  // Current Age
  function calculateAge(birthYear) {
    let year = 2019;
    console.log('This is your current age: '+(year - birthYear));
  
  }
  
  // Tipping 
  function tip(mealPrice) {
    console.log('If you\'re tipping 15% of the meal: '+0.15 * mealPrice) 
    console.log('If you\'re tipping 20% of the meal: '+0.20 * mealPrice);
    console.log('If you\'re tipping 30% of the meal: '+0.30 * mealPrice);
    console.log("No, seriously. If you're tipping over 30% that is very generous.");
  }
  
  pythTheorem(6, 4); // 22
  calculateAge(2003); // 16
  tip(200);