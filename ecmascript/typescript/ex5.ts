// Define an array of strings
const fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];

// Traverse the array using a for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Traverse the array using a for...of loop
console.log("Using for...of loop:");
for (const fruit of fruits) {
  console.log(fruit);
}

// Traverse the array using the forEach method
console.log("Using forEach method:");
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Traverse the array using the map method (and create a new array)
console.log("Using map method:");
const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits);

// Traverse the array using the reduce method (and concatenate the strings)
console.log("Using reduce method:");
const concatenatedFruits = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log(concatenatedFruits);

// Traverse the array using the filter method (and filter out fruits with more than 5 letters)
console.log("Using filter method:");
const shortFruits = fruits.filter((fruit) => fruit.length <= 5);
console.log(shortFruits);
