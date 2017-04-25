function listAllValues(obj) {
  var arr = [];
  for (var item in obj) {
    arr.push(obj[item]);
  }
  return arr;
}

listAllValues({
  name : 'Krysten',
  age : 33,
  hasPets : false
});
