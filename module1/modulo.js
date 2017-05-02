function modulo(num1, num2) {
  if(num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  } else if (num1 === 0) {
    return 0;
  }
  var mod = num1 >= 0;
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while (num1 >= num2) {
    num1 -= num2;
  }
  return mod ? num1 : 0 - num1;
}
var output = modulo(25, -4);
console.log(output); // --> 1

// x - y * floor(x / y)

// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:
// * Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.
