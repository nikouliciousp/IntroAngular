// 1. Regular Function:
function regularFunction() {
  console.log("Hello, World!");
}
regularFunction(); // Output: Hello, World!

// 2. Arrow Function:
const arrowFunction = () => {
  console.log("Hello, World!");
};
arrowFunction(); // Output: Hello, World!

// 3. Function Expression:
const functionExpression = function () {
  console.log("Hello, World!");
};
functionExpression(); // Output: Hello, World!

// 4. Method in an Object:
const obj = {
  method: function () {
    console.log("Hello, World!");
  },
};
obj.method(); // Output: Hello, World!

// 5. Generator Function:
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

// 6. Async Function:
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// Note: fetchData() needs to be called in an environment where fetch is available (e.g., browser or Node.js with node-fetch)

// 7. IIFE (Immediately Invoked Function Expression):
(function () {
  console.log("Hello, World!");
})(); // Output: Hello, World!

// 8. Function with a Constructor:
function Person(name) {
  this.name = name;
}
const person = new Person("Alice");
console.log(person.name); // Output: Alice
