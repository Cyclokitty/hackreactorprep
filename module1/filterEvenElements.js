function filterEvenElements(arr) {
  const evens = arr.filter(item => {
    return item % 2 === 0;
  });
  return evens;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output);
