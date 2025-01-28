// Define a function that takes a separator and a variable number of arguments using the rest parameter
function join(separator, ...args) {
  // Use the join method to concatenate the arguments with the separator
  return args.join(separator);
}

// Call the join function with a separator and multiple arguments
const result = join("-", "apple", "orange", "banana");

// Log the result to the console
console.log(result); // Output: apple-orange-banana
