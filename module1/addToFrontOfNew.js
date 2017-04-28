function addToFrontOfNew(arr, element) {
  const newArr = [];
  for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
  }
  newArr.unshift(element);
  return newArr;
}

addToFrontOfNew([1, 2], 3);
