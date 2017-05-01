function joinArrayOfArrays(arr) {
  var flatten = [];
  return flatten.concat(...arr);
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
