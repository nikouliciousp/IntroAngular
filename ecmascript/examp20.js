// Define the Person class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Method to greet with name and age using arrow function
  greet = () => {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and my age is ${this.age}`
    );
  };
}

// Define the Employee class that extends Person
class Employee extends Person {
  constructor(firstName, lastName, age, position) {
    super(firstName, lastName, age);
    this.position = position;
  }

  // Method to introduce with name, age, and position using arrow function
  introduce = () => {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}, my age is ${this.age}, and I'm a ${this.position}`
    );
  };
}

// Create a new Employee object
const employee = new Employee("John", "Doe", 30, "Software Engineer");

// Call the greet method from the Person class
employee.greet(); // Output: Hello, my name is John Doe and my age is 30

// Call the introduce method from the Employee class
employee.introduce(); // Output: Hello, my name is John Doe, my age is 30, and I'm a Software Engineer
