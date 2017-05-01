function getLongestWordOfMixedElements(arr) {
  if (arr.length === 0) {
    return "";
  }
  var isThereAString = 0;
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' ) {
      isThereAString++;
      if (arr[i].length > longest) {
        longest = arr[i];
      } else if (arr[i].length === longest.length) {
        longest = longest;
      }
    }
  }
  if (isThereAString === 0) {
    return "";
  } else {
    return longest;
  }
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:
// * If the array is empty, it should return an empty string ("").
// * If the array contains no strings; it should return an empty string.
