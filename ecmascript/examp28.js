// Define a class with a private field and methods
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}

// Create an instance of the Person class
const person = new Person("Alice");

// Use Reflect to call the getName method to get the value of the private field
const personName = Reflect.apply(person.getName, person, []);
console.log(personName); // Output: Alice

// Use Reflect to call the setName method to set the value of the private field
Reflect.apply(person.setName, person, ["Bob"]);
console.log(person.getName()); // Output: Bob

// Use Reflect to define a new property
Reflect.defineProperty(person, "age", {
  value: 30,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(person.age); // Output: 30

// Use Reflect to delete a property
Reflect.deleteProperty(person, "age");
console.log(person.age); // Output: undefined
