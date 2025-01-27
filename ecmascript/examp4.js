// Define a constructor function for creating Person objects
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Create a new Person object using the constructor function
const john = new Person("John", "Doe");

// Log the created Person object
console.log(john); // Output: Person { firstName: 'John', lastName: 'Doe' }

// Define a method for the Person prototype
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

// Log the full name of the Person object
console.log(john.fullName()); // Output: John Doe
