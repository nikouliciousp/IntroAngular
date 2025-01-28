// Define an array of employee objects with name and salary properties
const employees = [
  { name: "John", salary: 90000 },
  { name: "Jane", salary: 105000 },
  { name: "David", salary: 98000 },
  { name: "Tom", salary: 110000 },
];

// Find the first employee with a salary greater than 100000
const highEarner = employees.find((employee) => employee.salary > 100000);

// Log the entire employee object to the console
console.log(highEarner); // Output: { name: 'Jane', salary: 105000 }

// Log the name of the first employee with a salary greater than 100000
console.log(highEarner.name); // Output: Jane

// Log the salary of the first employee with a salary greater than 100000
console.log(highEarner.salary); // Output: 105000

// Define a comparison function to sort employees by salary in ascending order
const sortBySalary = (a, b) => a.salary - b.salary;

// Sort the employees array by salary in ascending order
employees.sort(sortBySalary);

// Log the sorted employees array to the console
console.log(employees);
// Output:
// [
//   { name: 'John', salary: 90000 },
//   { name: 'David', salary: 98000 },
//   { name: 'Jane', salary: 105000 },
//   { name: 'Tom', salary: 110000 }
// ]
