// Define an array of fruits
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Use the map method to create a new array with the lengths of each fruit name
const lengths = fruits.map((fruit) => fruit.length);

// Log the array of lengths to the console
console.log(lengths); // Output: [5, 6, 6, 5, 4]

// Use the arrow function syntax with implicit return to create a new array with the uppercase versions of each fruit name
const uppercased = fruits.map((fruit) => fruit.toUpperCase());

// Log the array of uppercase fruit names to the console
console.log(uppercased); // Output: [ 'APPLE', 'BANANA', 'ORANGE', 'GRAPE', 'KIWI' ]

// Use the arrow function syntax with implicit return to create a new array with the first letter of each fruit name
const firstLetters = fruits.map((fruit) => fruit[0]);

// Log the array of first letters to the console
console.log(firstLetters); // Output: [ 'a', 'b', 'o', 'g', 'k' ]
