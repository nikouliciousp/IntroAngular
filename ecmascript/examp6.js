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
