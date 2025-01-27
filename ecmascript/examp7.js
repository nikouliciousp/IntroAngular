// Define a function to create a person object
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      // Log a greeting message using the 'name' and 'age' properties of the object
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old`
      );
    },
  };
}

// Create a new person object using the createPerson function
const person = createPerson("Alice", 28);

// Call the greet method of the person object
person.greet(); // Output: Hello, my name is Alice and I am 28 years old
