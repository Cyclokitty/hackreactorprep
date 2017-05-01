function getElementsGreaterThan10AtProperty(obj, key) {
  var newArr = [];
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  if (obj[key].length === 0) {
    return [];
  } else {
    for (var i = 0; i < obj[key].length; i++) {
      if (obj[key][i] > 10) {
        newArr.push(obj[key][i]);
      }
    }
  }
  if (newArr.length === 0) {
    return [];
  } else {
    return newArr;
  }
}


var obj = {
  key: [1, 2, 3]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);
