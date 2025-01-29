// Define a generic function that returns an array of the given type
function createArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

// Use the generic function with different types
let numberArray = createArray<number>([1, 2, 3]);
let stringArray = createArray<string>(["a", "b", "c"]);

// Log the arrays to the console
console.log(numberArray); // Output: [1, 2, 3]
console.log(stringArray); // Output: ["a", "b", "c"]

// Define a generic interface
interface Pair<T, U> {
  first: T;
  second: U;
}

// Create objects that satisfy the Pair interface with different types
let numberStringPair: Pair<number, string> = { first: 1, second: "one" };
let stringBooleanPair: Pair<string, boolean> = { first: "true", second: true };

// Log the pairs to the console
console.log(numberStringPair); // Output: { first: 1, second: "one" }
console.log(stringBooleanPair); // Output: { first: "true", second: true }

// Define a generic class
class GenericClass<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// Create instances of the generic class with different types
let numberInstance = new GenericClass<number>(42);
let stringInstance = new GenericClass<string>("Hello, World!");

// Log the values to the console
console.log(numberInstance.getValue()); // Output: 42
console.log(stringInstance.getValue()); // Output: "Hello, World!"

// Define a generic function that takes a callback function
function callCallback<T>(callback: (value: T) => void, value: T): void {
  callback(value);
}

// Define a callback function
function logValue(value: number): void {
  console.log(value);
}

// Call the generic function with the callback function
callCallback<number>(logValue, 42); // Output: 42

// Define a generic function that takes a callback function with arguments
function callCallbackWithArgs<T, U>(
  callback: (value: T, message: U) => void,
  value: T,
  message: U
): void {
  callback(value, message);
}

// Define a callback function with arguments
function logValueWithMessage(value: number, message: string): void {
  console.log(message, value);
}

// Call the generic function with the callback function and arguments
callCallbackWithArgs<number, string>(logValueWithMessage, 42, "The value is:"); // Output: The value is: 42

// Define a generic class with constraints
class ConstrainedClass<T extends number | string> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// Create instances of the constrained class with different types
let numberIns = new ConstrainedClass<number>(42);

// Log the value to the console
console.log(numberInstance.getValue()); // Output: 42

// Create an instance of the constrained class with an invalid type
let stringInst = new ConstrainedClass<string>("Hello, World!"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
