// Function overloads for a function that can take either a string or a number
function combine(input1: string, input2: string): string;
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: number): string;
function combine(input1: number, input2: string): string;

// Implementation of the overloaded function
function combine(
  input1: string | number,
  input2: string | number
): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + input2;
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

// Test the overloaded function with different argument types
const result1 = combine("Hello, ", "World!");
console.log(result1); // Output: Hello, World!

const result2 = combine(10, 20);
console.log(result2); // Output: 30

const result3 = combine("The answer is ", 42);
console.log(result3); // Output: The answer is 42

const result4 = combine(42, " is the answer");
console.log(result4); // Output: 42 is the answer
