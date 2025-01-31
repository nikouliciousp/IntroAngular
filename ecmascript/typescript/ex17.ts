// Define a class with different access modifiers
class Person {
  // Public property (default)
  public name: string;

  // Private property
  public age: number;

  // Protected property
  protected email: string;

  // Constructor to initialize the properties
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Public method
  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }

  // Private method
  private getAge(): number {
    return this.age;
  }

  // Protected method
  protected getEmail(): string {
    return this.email;
  }
}

// Define a subclass that extends the Person class
class Employee extends Person {
  // Public property
  public role: string;

  // Constructor to initialize the properties
  constructor(name: string, age: number, email: string, role: string) {
    super(name, age, email);
    this.role = role;
  }

  // Public method to get employee details
  public getEmployeeDetails(): string {
    return `${this.getDetails()}, Role: ${this.role}`;
  }

  // Method to access protected property from the base class
  public getEmployeeEmail(): string {
    return this.getEmail();
  }
}

// Create an instance of the Person class
const individual = new Person("John Doe", 30, "john.doe@example.com");
console.log(individual.name); // Output: John Doe
// console.log(individual.age); // Error: Property 'age' is private and only accessible within class 'Person'.
// console.log(individual.email); // Error: Property 'email' is protected and only accessible within class 'Person' and its subclasses.
console.log(individual.getDetails()); // Output: Name: John Doe, Age: 30, Email: john.doe@example.com

// Create an instance of the Employee class
const employee = new Employee(
  "Jane Smith",
  25,
  "jane.smith@example.com",
  "Developer"
);
console.log(employee.name); // Output: Jane Smith
console.log(employee.role); // Output: Developer
console.log(employee.getEmployeeDetails()); // Output: Name: Jane Smith, Age: 25, Email: jane.smith@example.com, Role: Developer
console.log(employee.getEmployeeEmail()); // Output: jane.smith@example.com
