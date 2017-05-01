function removeElement(array, discarder) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== discarder) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);
