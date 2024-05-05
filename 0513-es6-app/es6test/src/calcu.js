// calculator.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    console.log('Division by zero');
  }
  return a / b;
};

export { add, subtract, multiply, divide };
