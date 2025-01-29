// Define a function that returns a description of a person
const getPersonDescription = (
  name: string,
  age: number,
  city: string
): string => {
  return `My name is ${name}, I am ${age} years old and I live in ${city}`;
};

// Log the result to the console
console.log(getPersonDescription("Peris", 30, "Thessaloniki")); // Output: My name is Peris, I am 30 years old and I live in Thessaloniki
