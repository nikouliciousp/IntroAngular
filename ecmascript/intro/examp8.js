// Define a constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    // Log a greeting message using the 'name' and 'age' properties of the object
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  };
}

// Create new Person objects using the constructor function
let p1 = new Person("Alice", 25);
let p2 = new Person("Bob", 30);

// Call the greet method of the Person objects
p1.greet(); // Output: Hello, my name is Alice and I am 25 years old
p2.greet(); // Output: Hello, my name is Bob and I am 30 years old
