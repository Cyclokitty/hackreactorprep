function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  var p = principal;
  var i = interestRate;
  var n = compoundingFrequency;
  var t = timeInYears;

  var base = (1 + i/n);
  var exponent = n*t;

  var accrued = (p * Math.pow(base, exponent)) - p;
  return accrued;
}

var output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.8368221341061


// P = Principle
// i = Annual interest rate
// n = the number of time interest is compounded a year
// t = the number of years
// Total compound Interest = P(1 + i/t)^(n*t) - P
 
