// Define the Person interface
interface Person {
  name: string;
  age: number;
}

// Define the Employee interface
interface Employee {
  company: string;
  role: string;
}

// Define a type that combines Person and Employee
type EmployeePerson = Person & Employee;

// Create an object that satisfies the EmployeePerson type
let employeePerson: EmployeePerson = {
  name: "John",
  age: 25,
  company: "ABC",
  role: "Software Engineer",
};

// Log the employeePerson object to the console
console.log(employeePerson); // Output: { name: 'John', age: 25, company: 'ABC', role: 'Software Engineer' }
