function addToBackOfNew(arr, element) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
  }
  newArr.push(element);
  return newArr;
}

addToBackOfNew([1, 2, 3, 4], 5);
