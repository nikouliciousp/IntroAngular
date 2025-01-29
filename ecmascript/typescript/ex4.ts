// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Traverse the array using a for loop
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Traverse the array using a for...of loop
console.log("Using for...of loop:");
for (const num of numbers) {
  console.log(num);
}

// Traverse the array using the forEach method
console.log("Using forEach method:");
numbers.forEach((num) => {
  console.log(num);
});

// Traverse the array using the map method (and create a new array)
console.log("Using map method:");
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// Traverse the array using the reduce method (and calculate the sum)
console.log("Using reduce method:");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Traverse the array using the filter method (and filter out even numbers)
console.log("Using filter method:");
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
