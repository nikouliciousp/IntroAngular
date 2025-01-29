// Define a function that takes an unknown type and performs type checking
function processValue(value: unknown): void {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value * 2}`);
  } else if (typeof value === "boolean") {
    console.log(`Boolean value: ${value ? "True" : "False"}`);
  } else if (Array.isArray(value)) {
    console.log(`Array value: ${value.join(", ")}`);
  } else if (typeof value === "object" && value !== null) {
    console.log(`Object value: ${JSON.stringify(value)}`);
  } else {
    console.log("Unknown type");
  }
}

// Test the function with different types of values
processValue("Hello, World!"); // Output: String value: HELLO, WORLD!
processValue(42); // Output: Number value: 84
processValue(true); // Output: Boolean value: True
processValue([1, 2, 3]); // Output: Array value: 1, 2, 3
processValue({ name: "John", age: 30 }); // Output: Object value: {"name":"John","age":30}
processValue(null); // Output: Unknown type
processValue(undefined); // Output: Unknown type
