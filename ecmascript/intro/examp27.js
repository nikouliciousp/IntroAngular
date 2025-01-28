// Define an object with a method
const obj = {
  sayHello() {
    console.log("Hello, World!");
  },
};

// Use destructuring assignment to extract the sayHello method and rename it to greet
const { sayHello: greet } = obj;

// Call the extracted method
greet(); // Output: Hello, World!

// Define a class with methods
class MyClass {
  // Method to say hello with a message
  sayHello(message) {
    console.log(`Hello, ${message}!`);
  }

  // Method to say goodbye with a message
  sayGoodbye(message) {
    console.log(`Goodbye, ${message}!`);
  }
}

// Create an instance of MyClass
const myInstance = new MyClass();

// Use destructuring assignment to extract the methods and rename them
const { sayHello: Hello, sayGoodbye: Goodbye } = myInstance;

// Call the extracted methods
Hello("World"); // Output: Hello, World!
Goodbye("World"); // Output: Goodbye, World!
