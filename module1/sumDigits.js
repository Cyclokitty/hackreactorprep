function sumDigits(num) {
  num = num.toString(10).split('');
  if (num[0] === '-') {
    num.shift(num[0]);
    num[0] *= -1;
    num = num.map(Number);
    const sumDigits = num.reduce((accum, item) => {
    return accum + item;
  },0);
    return sumDigits;
  } else {
    num = num.map(Number);
    const sumDigits = num.reduce((accum, item) => {
    return accum + item;
  },0);
  return sumDigits;
  }
}

var output = sumDigits(316);
console.log(output);

// Given a number, "sumDigits" returns the sum of all its digits.
