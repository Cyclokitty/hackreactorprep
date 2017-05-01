function computeProductOfAllElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const products = arr.reduce((accum, item) => {
    return accum * item;
  }, 1);
  return products;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output);
