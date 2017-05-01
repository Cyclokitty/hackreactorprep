function computeSumOfAllElements(arr) {
  const sum = arr.reduce((accum, item) => {
    return accum + item;
  },0);
  return sum;
}

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output);
