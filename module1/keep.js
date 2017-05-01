function keep(array, keeper) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === keeper) {
      newArr.push(array[i]);
    }
  }
  if (newArr.length === 0) {
    return [];
  } else {
    return newArr;
  }
}

var output = keep([1, 4, 3, 9, 1], 2)
console.log(output);
