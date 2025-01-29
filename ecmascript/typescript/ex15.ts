// Define a function that throws an error
function throwError(message: string): never {
  throw new Error(message);
}

// Define a function that has an infinite loop
function infiniteLoop(): never {
  while (true) {
    console.log("This loop will never end");
  }
}

// Define a function that handles different types and uses the never type for exhaustive checks
function processVal(value: string | number | boolean): void {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value * 2}`);
  } else if (typeof value === "boolean") {
    console.log(`Boolean value: ${value ? "True" : "False"}`);
  } else {
    // Use the never type to ensure exhaustive checks
    const exhaustiveCheck: never = value;
    throw new Error(`Unhandled value: ${exhaustiveCheck}`);
  }
}

// Test the throwError function
try {
  throwError("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message); // Output: This is an error
  } else {
    console.error(error); // Output: unknown error
  }
}

// Test the infiniteLoop function (uncomment to run, it will block further execution)
// infiniteLoop();

// Test the processValue function with different types of values
processVal("Hello, World!"); // Output: String value: HELLO, WORLD!
processVal(42); // Output: Number value: 84
processVal(true); // Output: Boolean value: True

// Uncommenting the following line will cause a compile-time error due to the exhaustive check
// processValue(null); // Error: Argument of type 'null' is not assignable to parameter of type 'string | number | boolean'.
