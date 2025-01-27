// Create a new object
const myObject = new Object();

// Add properties to the object
myObject.name = "myObject";
myObject.age = 30;

// Add a method to the object
myObject.sayHello = function () {
  console.log("Hello from " + this.name);
  console.log("Age: " + this.age);
};

// Call the method
myObject.sayHello(); // Output: Hello from myObject

// Get the keys of the object
const keys = Object.keys(myObject);
console.log(keys); // Output: [ 'name', 'age', 'sayHello' ]

// Get the values of the object
const values = Object.values(myObject);
console.log(values); // Output: [ 'myObject', 30, [Function: sayHello] ]

// Get the entries of the object
const entries = Object.entries(myObject);
console.log(entries); // Output: [ [ 'name', 'myObject' ], [ 'age', 30 ], [ 'sayHello', [Function: sayHello] ] ]

// Get the property descriptor of the 'name' property
const descriptor = Object.getOwnPropertyDescriptor(myObject, "name");
console.log(descriptor); // Output: { value: 'myObject', writable: true, enumerable: true, configurable: true }

// Check the type of myObject
console.log(typeof myObject); // Output: object

// Check if myObject is an instance of Object
console.log(myObject instanceof Object); // Output: true

// Check if myObject is an instance of Array
console.log(myObject instanceof Array); // Output: false

// Check if the prototype of myObject is Object.prototype
console.log(Object.getPrototypeOf(myObject) === Object.prototype); // Output: true

// Create a copy of myObject and update the age property
let copy = Object.assign(myObject, { age: 40 });
console.log(copy); // Output: { name: 'myObject', age: 40, sayHello: [Function: sayHello] }

// Get the entries of the copied object
const entriesOfCopy = Object.entries(copy);
console.log(entriesOfCopy); // Output: [ [ 'name', 'myObject' ], [ 'age', 40 ], [ 'sayHello', [Function: sayHello] ] ]

// Get reconverted object from the entries
const reconvertedObject = Object.fromEntries(entriesOfCopy);
console.log(reconvertedObject); // Output: { name: 'myObject', age: 40, sayHello: [Function: sayHello] }

// Get a deep copy of myObject
let deepCopy = JSON.parse(JSON.stringify(myObject));
console.log(deepCopy); // Output: { name: 'myObject', age: 40 }
deepCopy.age = 50;
console.log(deepCopy); // Output: { name: 'myObject', age: 50 }
console.log(myObject); // Output: { name: 'myObject', age: 40 }
