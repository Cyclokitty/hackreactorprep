function removeProperty(obj, key) {
  delete obj[key];
}

var obj = {
  name: 'Sam',
  age: 20
};

removeProperty(obj, 'name');
