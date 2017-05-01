function removeNumbersLessThan(num, obj) {
  for (var item in obj) {
    if (obj[item] < num) {
      delete obj[item];
    }
  }
  return obj;
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
};

removeNumbersLessThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana'
