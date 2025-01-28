// Define an object
const person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
};

// Use Reflect.getOwnPropertyDescriptor to get the property descriptor of 'firstName'
const descriptor = Reflect.getOwnPropertyDescriptor(person, "firstName");

// Log the property descriptor
console.log(descriptor);
// Output: { value: 'Alice', writable: true, enumerable: true, configurable: true }

// Use Reflect.defineProperty to modify the 'firstName' property descriptor
Reflect.defineProperty(person, "firstName", {
  value: "Bob",
  writable: false,
  enumerable: true,
  configurable: true,
});

// Log the updated person object
console.log(person); // Output: { firstName: 'Bob', lastName: 'Smith', age: 30 }

// Try to modify the 'firstName' property (should not change because writable is false)
person.firstName = "Charlie";

// Log the person object to see if 'firstName' changed
console.log(person); // Output: { firstName: 'Bob', lastName: 'Smith', age: 30 }

// Use Reflect.getOwnPropertyDescriptor to get the updated property descriptor of 'firstName'
const updatedDescriptor = Reflect.getOwnPropertyDescriptor(person, "firstName");

// Log the updated property descriptor
console.log(updatedDescriptor);
// Output: { value: 'Bob', writable: false, enumerable: true, configurable: true }
