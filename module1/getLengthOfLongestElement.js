function getLengthOfLongestElement(arr) {
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output);
