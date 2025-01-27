// Define an object with properties and a method
const obj = {
  name: "John",
  age: 30,
  greet: function () {
    // Log a greeting message using the 'name' property of the object
    console.log("Hello my name is " + this.name);
  },
};

// Call the greet method of the object
obj.greet(); // Output: Hello my name is John

// Assign the greet method to a new variable
const pgreeter = obj.greet;

// Call the function assigned to the new variable
pgreeter(); // Output: Hello my name is undefined (because 'this' refers to the global object, which doesn't have a 'name' property)
