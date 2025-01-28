// Define the Person class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Define the arguments to be passed to the constructor
let args = ["Alice", "Smith"];

// Use Reflect.construct to create a new instance of Person
let alice = Reflect.construct(Person, args);

// Check if the created object is an instance of Person
console.log(alice instanceof Person); // Output: true

// Log the full name of the created object
console.log(alice.fullName); // Output: Alice Smith

// Define a new set of arguments with an additional property
let argsWithAge = ["Bob", "Johnson", 30];

// Extend the Person class to include an age property
class PersonWithAge extends Person {
  constructor(firstName, lastName, age) {
    super(firstName, lastName);
    this.age = age;
  }

  // Getter for the full name with age
  get fullNameWithAge() {
    return `${this.firstName} ${this.lastName}, Age: ${this.age}`;
  }
}

// Use Reflect.construct to create a new instance of PersonWithAge with the new arguments and class definition.
let bob = Reflect.construct(Person, argsWithAge, PersonWithAge);

// Check if the created object is an instance of Person
console.log(bob instanceof Person); // Output: true

// Check if the created object is an instance of PersonWithAge
console.log(bob instanceof PersonWithAge); // Output: true

// Log the full name of the created object
console.log(bob.fullName); // Output: Bob Johnson

// Log the full name with age of the created object
console.log(bob.fullNameWithAge); // Output: Bob Johnson, Age: 30
