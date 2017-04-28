function removeStringValues(obj) {
  for (var item in obj) {
      if (typeof obj[item] === 'string') {
          delete obj[item];
      }
  }
  return obj;
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};

removeStringValues(obj);
