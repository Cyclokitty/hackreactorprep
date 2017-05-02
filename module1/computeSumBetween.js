function computeSumBetween(num1, num2) {
  if(num2 <= num1) {
    return 0;
  }
  var range = [];
  for(var i = num1; i < num2; i++){
    range.push(i);
  }
  var product = range.reduce(function(a, b) {
    return a + b;
  });
  return product;
}

var output = computeSumBetween(1, 4);
console.log(output); // --> 24

// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The product between 1 and 4 is 1 + 2 + 3 = 6.
// * If num2 is not greater than num1, it should return 0.
