function fromListToObject(array) {
  var obj = {};
  for (let i = 0; i < array.length; i++) {
    let first = array[i][0];
    let last = array[i][1];
    obj[first] = last;
  }
  return obj;
}

fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
