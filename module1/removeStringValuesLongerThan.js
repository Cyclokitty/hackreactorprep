function removeStringValuesLongerThan(num, obj) {
  for (var item in obj) {
    if (obj[item].length > num) {
      delete obj[item];
    }
  }
  return obj;
}

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

removeStringValuesLongerThan(6, obj);
console.log(obj);
