function getLongestElement(arr) {
  if (arr.length === 0) {
    return [];
  }
  var longest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    } else if (arr[i].length === longest.length) {
      longest = longest;
    }
  }
  return longest;
}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output);

// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, it should return an empty string.
