function removeEvenValues(obj) {
  for (var item in obj) {
    if (obj[item] % 2 === 0) {
      delete obj[item];
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};

removeEvenValues(obj);
console.log(obj);
