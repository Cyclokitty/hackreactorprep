function getElementsThatEqual10AtProperty(obj, key) {
  var newArr = [];
  if (!obj[key]) {
          return [];
      }
  for (var i = 0; i < obj[key].length; i++) {
      if (obj[key][i] === 10) {
          newArr.push(obj[key][i]);
      }
  }
  return newArr;
}

var obj = {
  key: [1000, 10, 50, 10]
};

getElementsThatEqual10AtProperty(obj, 'key');
