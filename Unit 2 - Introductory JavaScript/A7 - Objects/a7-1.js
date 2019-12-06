let ask = require("../ask.js");

let alex = {}
alex.firstName = "Alex";
alex.lastName = "Pahdler";
alex.streetAddress = '53 Blair Crescent';
alex.city = 'Toronto';
alex.province = "Ontario";
alex.postalCode = "L3MDSC";

let samuel = {}
samuel.firstName = "Sam";
samuel.lastName = "Boulder";
samuel.streetAddress = "28 Saint Street";
samuel.city = 'Toronto';
samuel.province = "Ontario";
samuel.postalCode = "WJDB2DS";

let jeff = {}
jeff.firstName = "Jeff";
jeff.lastName = "Persona";
jeff.streetAddress = "35 Street Street";
jeff.city = "Ottawa";
jeff.province = "Ontario";
jeff.postalCode = "2IDSAB";

function mailingLabel(person) {
  console.log(person.firstName + ' ' + person.lastName);
  console.log(person.streetAddress);
  console.log(person.city + ', ' + person.province);
  console.log(person.postalCode);
}

mailingLabel(alex);
mailingLabel(samuel);
mailingLabel(jeff);
