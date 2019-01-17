//
//  Object Destructuring
//

// const person = {
//   name: "Jesse",
//   age: 37,
//   location: {
//     city: "Carstairs",
//     temp: 6
//   }
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`it's ${temperature}c in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = [
  "1299 Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

//const [street, city, state, zipcode] = address;

// If you just need city and state
const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}.`);

//console.log(`You are in ${address[1]} ${address[2]}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);
