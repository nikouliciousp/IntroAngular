// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the filter method to create a new array with only the even numbers
const evenNumbers = numbers.filter(function (number) {
  // Check if the number is even
  return number % 2 === 0;
});

// Log the array of even numbers to the console
console.log(evenNumbers); // Output: [2, 4]

// Use the arrow function syntax to create a new array with only the odd numbers
const oddNumbers = numbers.filter((number) => {
  // Check if the number is odd
  return number % 2 !== 0;
});

// Log the array of odd numbers to the console
console.log(oddNumbers); // Output: [1, 3, 5]

// Use the arrow function syntax with implicit return to create a new array with only the odd numbers
const oddNumbersImplicit = numbers.filter((number) => number % 2 !== 0);

// Log the array of odd numbers to the console
console.log(oddNumbersImplicit); // Output: [1, 3, 5]
