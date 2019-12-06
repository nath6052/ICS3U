let readlineSync = require('readline-sync');
module.exports = function(prompt) {
  let response = readlineSync.question(prompt);
  let num = Number(response);
  if (isNaN(num))
    return response;
  return num;
}

