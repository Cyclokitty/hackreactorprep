function getLargestElement(arr) {
  if (arr.length === 0) {
    return [];
  }
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:
// * It should return 0 if the array is empty.
