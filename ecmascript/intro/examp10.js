// Define a constructor function for creating Person objects
function Person(name) {
  this.name = name;
}

// Add a greet method to the Person prototype
Person.prototype.greet = function () {
  // Log a greeting message using the 'name' property of the object
  console.log("Hello, my name is " + this.name);
};

// Create a new Person object using the constructor function
let person = new Person("Alice");

// Call the greet method of the Person object
person.greet(); // Output: Hello, my name is Alice
