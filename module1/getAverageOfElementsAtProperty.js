function getAverageOfElementsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return 0;
  }
  if (!Array.isArray(obj[key])) {
    return 0;
  }
  if (obj[key].length === 0) {
    return 0;
  } else {
    const total = obj[key].reduce((accum, num) => {
      return accum + num;
    }, 0);
    return total / obj[key].length;
  }
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);

//Notes:
// * If the array at the given key is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.
