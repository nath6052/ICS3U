let ask = require("../ask.js");
let name = ask("What's your name or a name?");
let color = ask('What is your favorite color?');
let country = ask("What country were you born in?");
let date = ask("What date is it?");
let time = ask("What time is it?");
let food = ask("What was the last food you ate?");
let dogbreed = ask("Name a dog breed.");
let noun = ask("Give a noun.");
let adjective = ask('Give an adjective.');
let emotion = ask("Name a mood.");

console.log(`${name} went to the store and found a beautiful shirt with the color ${color} on it, but it wasn't in stock anymore so ${name} had to go to ${country} to get it. Of course, he wasn't going to spend the time to do it, especially since it was ${date} as well as ${time}, so he just wanted to get some food instead. Specifically, ${food}, but he also wanted to get a dog. Specifically, a ${dogbreed} but he just went and ${noun}, it's ${adjective}. At the end of the day, he felt ${emotion}.`);