// The Person class defines a constructor that takes firstName and lastName parameters
// and assigns them to the firstName and lastName properties of the object.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // The sayName method logs the full name of the person to the console.
  sayName() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  }
}

// The new keyword is used to create a new Person object with the firstName "John" and the lastName "Doe".
let person = new Person("John", "Doe");

// The sayName method is then called on the person object, which logs "My name is John Doe" to the console.
person.sayName();
// Output:
// My name is John Doe
