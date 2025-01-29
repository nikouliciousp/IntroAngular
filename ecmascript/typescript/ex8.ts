// Define a variable that can hold a number or a string
let myNumber: number | string = 42;

// Assign a number to the variable
myNumber = 42;

// Log the current value of the variable
console.log(myNumber); // Output: 42

// Assign a string to the variable
myNumber = "forty-two";

// Log the current value of the variable
console.log(myNumber); // Output: forty-two

// Attempt to assign a boolean to the variable (this will cause an error)
// myNumber = true; // Error: Type 'true' is not assignable to type 'string | number'

// Correctly handle the assignment of a boolean by checking the type
const valueToAssign: any = true;
if (typeof valueToAssign === "number" || typeof valueToAssign === "string") {
  myNumber = valueToAssign;
} else {
  console.error(
    `Type '${typeof valueToAssign}' is not assignable to type 'string | number'.`
  );
}
