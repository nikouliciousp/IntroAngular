// Define a function using function declaration
function add(a, b) {
  return a + b;
}

// Define a function using function expression
let addExpression = function (a, b) {
  return a + b;
};

// Define a function using arrow function (concise body)
let addArrowConcise = (a, b) => a + b;

// Define a function using arrow function (block body)
let addArrowBlock = (a, b) => {
  return a + b;
};

// Define a function using arrow function (block body with intermediate variable)
let addArrowWithVar = (a, b) => {
  let c = a + b;
  return c;
};
