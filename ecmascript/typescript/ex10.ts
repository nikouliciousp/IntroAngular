// Define a variable with type 'any'
let value: any = "Hello, World!";

// Type assertion using 'as' syntax
let stringLength: number = (value as string).length;

// Type assertion using angle-bracket syntax
let stringLength2: number = (<string>value).length;

// Log the lengths of the string
console.log(stringLength); // Output: 13
console.log(stringLength2); // Output: 13

// Define the Person interface
interface Person {
  name: string;
  age: number;
}

// Define a variable with type 'any' and assign an object to it
let person: any = {
  name: "John",
  age: 25,
};

// Type assertion to treat 'person' as a 'Person' object
let personInfo = person as Person;

// Log the personInfo object and its properties
console.log(personInfo); // Output: { name: 'John', age: 25 }
console.log(personInfo.name); // Output: John
console.log(personInfo.age); // Output: 25
