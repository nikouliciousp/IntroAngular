// Define a function to log the property value of an object using Reflect.get
function logProperty(obj, propertyName) {
  // Use Reflect.get to get the value of the specified property
  const value = Reflect.get(obj, propertyName);
  // Log the property name and value
  console.log(`${propertyName}: ${value}`);
}

// Define an object with properties 'name' and 'age'
const obj = {
  name: "John",
  age: 30,
};

// Call the logProperty function to log the 'name' property
logProperty(obj, "name"); // Output: name: John

// Call the logProperty function to log the 'age' property
logProperty(obj, "age"); // Output: age: 30

// Define a new property 'occupation' using Reflect.defineProperty
Reflect.defineProperty(obj, "occupation", {
  value: "Software Engineer",
  writable: true,
  enumerable: true,
  configurable: true,
});

// Call the logProperty function to log the 'occupation' property
logProperty(obj, "occupation"); // Output: occupation: Software Engineer

// Use Reflect.set to update the 'occupation' property
Reflect.set(obj, "occupation", "Senior Software Engineer");

// Call the logProperty function to log the updated 'occupation' property
logProperty(obj, "occupation"); // Output: occupation: Senior Software Engineer
