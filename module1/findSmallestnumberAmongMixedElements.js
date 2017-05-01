function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var isThereANum = 0;
  var smallest = Number.MAX_VALUE;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' ) {
      isThereANum++;
      if (arr[i] < smallest) {
        smallest = arr[i];
      } else if (arr[i] === smallest) {
        smallest = smallest;
      }
    }
  }
  if (isThereANum === 0) {
    return 0;
  } else {
    return smallest;
  }
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output);

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.
