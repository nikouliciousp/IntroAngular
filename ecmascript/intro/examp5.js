console.log(this);

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
