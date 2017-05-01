function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output);
