// Define two objects with the same properties
const objOne = { x: 1, y: 2 };
const objTwo = { x: 2, y: 4 };

// Define a function that prints the properties of the object it is called on
function print() {
  console.log(this.x, this.y);
}

// Call the function with objOne as the context
print.call(objOne); // Output: 1 2

// Call the function with objTwo as the context
print.call(objTwo); // Output: 2 4
