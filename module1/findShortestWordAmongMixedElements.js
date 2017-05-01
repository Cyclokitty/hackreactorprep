function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) {
    return "";
  }
  var isThereAString = 0;
  var shortest = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' ) {
      isThereAString++;
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      } else if (arr[i].length === shortest.length) {
        shortest = shortest;
      }
    }
  }
  if (isThereAString === 0) {
    return "";
  } else {
    return shortest;
  }
}

var output = findShortestWordAmongMixedElements([4, 9, 2, 9, 6]);
console.log(output);

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear in the given array.
// * Expect the given array to have values other than strings.
// * If the given array is empty, it should return an empty string.
// * If the given array contains no strings, it should return an empty string.
