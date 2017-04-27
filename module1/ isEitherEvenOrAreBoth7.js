function isEitherEvenOrAreBoth7(num1, num2) {
  if (num1 === 7 && num2 === 7 ) {
      return true;
  } else if (num1 % 2 === 0 || num2 % 2 === 0){
      return true;
  } else {
      return false;
  }
}

isEitherEvenOrAreBoth7(2,7);

//Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.
