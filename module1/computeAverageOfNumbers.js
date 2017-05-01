function computeAverageOfNumbers(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const total = nums.reduce((accum, num) => {
    return accum + num;
  }, 0);
  return total / nums.length;
}

var input = [];
var output = computeAverageOfNumbers(input);
console.log(output); 
