// main.js
import { add, subtract, multiply, divide } from './calcu.js';
import { repeatPrint } from './print.js';
import { applyTenPercentDiscount, applyTwentyPercentDiscount, applyThirtyPercentDiscount } from './discount.js';
const num1 = 10;
const num2 = 5;

console.log(`덧셈: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`뺄셈: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`곱셈: ${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`나눗셈: ${num1} / ${num2} = ${divide(num1, num2)}`);

const value = 'Hello, world!';
const repeatCount = 3;

repeatPrint(value, repeatCount);

const originalPrice = 10000; // 10000원

console.log(`Original Price: ₩${originalPrice.toLocaleString()}`);
console.log(`Price after 10% discount: ₩${applyTenPercentDiscount(originalPrice).toLocaleString()}`);
console.log(`Price after 20% discount: ₩${applyTwentyPercentDiscount(originalPrice).toLocaleString()}`);
console.log(`Price after 30% discount: ₩${applyThirtyPercentDiscount(originalPrice).toLocaleString()}`);