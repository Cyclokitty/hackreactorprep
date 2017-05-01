function filterOddElements(arr) {
  const oddBalls = arr.filter(item => {
    return item % 2 !== 0;
  });
  return oddBalls;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); 
