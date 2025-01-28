// Define an object
const person = {
  firstName: "Alice",
  lastName: "Smith",
};

// Use Reflect.defineProperty to add a new property 'age' to the person object
Reflect.defineProperty(person, "age", {
  value: 30,
  writable: true,
  enumerable: true,
  configurable: true,
});

// Log the person object to see the new property
console.log(person); // Output: { firstName: 'Alice', lastName: 'Smith', age: 30 }

// Modify the 'age' property using Reflect.set
Reflect.set(person, "age", 31);

// Log the updated person object
console.log(person); // Output: { firstName: 'Alice', lastName: 'Smith', age: 31 }

// Use Reflect.defineProperty to add a new property 'fullName' with a getter
Reflect.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  enumerable: true,
  configurable: true,
});

// Log the full name using the new 'fullName' property
console.log(person.fullName); // Output: Alice Smith

// Use Reflect.deleteProperty to remove the 'age' property
Reflect.deleteProperty(person, "age");

// Log the person object to see the 'age' property removed
console.log(person); // Output: { firstName: 'Alice', lastName: 'Smith', fullName: 'Alice Smith' }
