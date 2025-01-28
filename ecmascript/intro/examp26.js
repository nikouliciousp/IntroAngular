// Define an array of numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use destructuring assignment to extract the first and second elements, and the rest of the elements
const [first, second, ...rest] = arr;

// Log the first and second elements to the console
console.log(first); // Output: 1
console.log(second); // Output: 2

// Log the rest of the elements to the console
console.log(rest); // Output: [3, 4, 5]

// Log all elements to the console
console.log(first, second, ...rest); // Output: 1 2 3 4 5
