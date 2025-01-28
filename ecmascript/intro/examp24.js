// Define a function that takes a variable number of arguments using the rest parameter
function sum(...args) {
  // Log the array of arguments to the console
  console.log(args); // Output: [ 1, 2, 3, 4, 5 ]

  // Use the reduce method to calculate the sum of the arguments
  return args.reduce((acc, val) => acc + val, 0);
}

// Call the sum function with multiple arguments and log the result
console.log(sum(1, 2, 3, 4, 5)); // Output: [ 1, 2, 3, 4, 5 ] 15
