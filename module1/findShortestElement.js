function findShortestElement(arr) {
  if (arr.length === 0) {
    return [];
  }
  var shortest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    } else if (arr[i].length === shortest.length) {
      shortest = shortest;
    }
  }
  return shortest;
}

var output = findShortestElement(['atboo', 'two', 'three', 'zoo']);
console.log(output); // --> 'a'

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.
