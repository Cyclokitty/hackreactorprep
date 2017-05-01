function squareElements(arr) {
  const squared = arr.map(item => {
    return Math.pow(item, 2);
  });
  return squared;
}

var output = squareElements([1, 2, 3]);
console.log(output);
