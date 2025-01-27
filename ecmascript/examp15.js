// Define the Person class
class Person {
  // Define private fields for firstName and lastName
  #firstName;
  #lastName;

  // The constructor takes firstName and lastName parameters
  // and assigns them to the #firstName and #lastName private properties of the object.
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  // Getter for firstName
  get firstName() {
    return this.#firstName;
  }

  // Getter for lastName
  get lastName() {
    return this.#lastName;
  }

  // Setter for firstName
  set firstName(value) {
    this.#firstName = value;
  }

  // Setter for lastName
  set lastName(value) {
    this.#lastName = value;
  }

  // Getter for fullName
  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  // Setter for fullName
  set fullName(value) {
    const parts = value.split(" ");
    this.#firstName = parts[0];
    this.#lastName = parts[1];
  }
}

// Create a new Person object using the constructor function
let person = new Person("Alice", "Smith");

// Call the fullName getter of the Person object and log the result
console.log(person.fullName); // Output: Alice Smith

// Update the firstName and lastName using setters
person.firstName = "Bob";
person.lastName = "Johnson";

// Call the fullName getter again and log the result
console.log(person.fullName); // Output: Bob Johnson

// Update the fullName using the setter
person.fullName = "Charlie Brown";

// Call the fullName getter again and log the result
console.log(person.fullName); // Output: Charlie Brown
