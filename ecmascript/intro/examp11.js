// Define a constructor function for creating Person objects
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Add a fullName method to the Person prototype
Person.prototype.fullName = function () {
  // Return the full name by concatenating the firstName and lastName properties
  return `${this.firstName} ${this.lastName}`;
};

// Create a new Person object using the constructor function
let person = new Person("Alice", "Smith");

// Call the fullName method of the Person object and log the result
console.log(person.fullName()); // Output: Alice Smith
