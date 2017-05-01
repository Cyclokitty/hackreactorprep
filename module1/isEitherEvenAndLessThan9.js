function isEitherEvenAndLessThan9(num1, num2) {
  if ((num1 % 2 === 0 || num2 % 2 === 0 ) && ( num1 < 9 && num2 < 9)) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEvenAndLessThan9(4, 5);
console.log(output);
