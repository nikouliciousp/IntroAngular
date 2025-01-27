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
