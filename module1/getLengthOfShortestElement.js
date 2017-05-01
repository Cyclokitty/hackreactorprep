function getLengthOfShortestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var total = arr[0].length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < total) {
      total = arr[i].length;
    }
  }
  return total;
}

var output = getLengthOfShortestElement(['one', 'two', 'three', 'mo']);
console.log(output);

// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:
// * It should return 0 if the array is empty.
