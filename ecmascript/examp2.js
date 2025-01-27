// Define a global function
function globalFunction() {
  console.log(this.firstName);
}

// Call the global function in the global context
globalFunction(); // Output: undefined (because 'this' refers to the global object, which doesn't have a 'firstName' property)

// Define an object with properties and a method
var obj = {
  firstName: "John",
  lastName: "Doe",
  globalFunction: globalFunction, // Assign the global function as a method of the object
};

// Call the method in the context of the object
obj.globalFunction(); // Output: John (because 'this' refers to the 'obj' object, which has a 'firstName' property)

// Define a function that uses 'this'
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

// Create a new instance of the Person object
var person = new Person("Jane", "Doe");

// Call the 'fullName' method in the context of the 'person' object
console.log(person.fullName()); // Output: Jane Doe (because 'this' refers to the 'person' object)

// Call the 'fullName' method in the global context
var fullName = person.fullName;
console.log(fullName()); // Output: undefined undefined (because 'this' refers to the global object, which doesn't have 'firstName' or 'lastName' properties)

// Define a function that uses 'this' in a nested function
function Outer() {
  this.outerProperty = "outer";
  this.innerFunction = function () {
    console.log(this.outerProperty); // 'this' refers to the object that called the function
  };
}

// Create a new instance of the Outer object
var outer = new Outer();

// Call the 'innerFunction' method in the context of the 'outer' object
outer.innerFunction(); // Output: outer (because 'this' refers to the 'outer' object)

// Define a function that uses 'this' in a nested function with a workaround
function Outer() {
  var self = this;
  this.outerProperty = "outer";
  this.innerFunction = function () {
    console.log(self.outerProperty); // 'self' refers to the 'this' value of the outer function
  };
}

// Create a new instance of the Outer object
var outer = new Outer();

// Call the 'innerFunction' method in the context of the 'outer' object
outer.innerFunction(); // Output: outer (because 'self' refers to the 'outer' object)

// Define a function that uses 'this' in a nested function with an arrow function
function Outer() {
  this.outerProperty = "outer";
  this.innerFunction = () => {
    console.log(this.outerProperty); // 'this' refers to the 'this' value of the outer function
  };
}

// Create a new instance of the Outer object
var outer = new Outer();

// Call the 'innerFunction' method in the context of the 'outer' object
outer.innerFunction(); // Output: outer (because 'this' refers to the 'outer' object)

// Define a function that uses 'this' in a nested function with an arrow function and a workaround
function Outer() {
  var self = this;
  this.outerProperty = "outer";
  this.innerFunction = () => {
    console.log(self.outerProperty); // 'self' refers to the 'this' value of the outer function
  };
}

// Create a new instance of the Outer object
var outer = new Outer();

// Call the 'innerFunction' method in the context of the 'outer' object
outer.innerFunction(); // Output: outer (because 'self' refers to the 'outer' object)
