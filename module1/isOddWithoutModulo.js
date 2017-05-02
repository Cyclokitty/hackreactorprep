function isOddWithoutModulo(num) {
  var number = Math.abs(num);
  while(number >= 2) {
    number -= 2;
  }
  return number !== 0;
}

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.
//
// Note:
// * It does so without using the modulo operator (%).
// * It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output);
