// Define a function that validates an email address using a regular expression
const validateEmail = (email: string): boolean => {
  // Regular expression for validating an email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Test the email against the regular expression
  return emailRegex.test(email);
};

// Define a function that extracts all numbers from a string using a regular expression
const extractNumbers = (input: string): number[] => {
  // Regular expression for matching all numbers in a string
  const numberRegex = /\d+/g;
  // Find all matches and convert them to numbers
  const matches = input.match(numberRegex);
  return matches ? matches.map(Number) : [];
};

// Test the validateEmail function
const email = "test@example.com";
console.log(`Is "${email}" a valid email?`, validateEmail(email)); // Output: Is "test@example.com" a valid email? true

// Test the extractNumbers function
const inputString = "The price is 100 dollars and 50 cents.";
console.log(
  `Extracted numbers from "${inputString}":`,
  extractNumbers(inputString)
); // Output: Extracted numbers from "The price is 100 dollars and 50 cents.": [100, 50]
