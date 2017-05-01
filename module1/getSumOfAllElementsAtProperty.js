function getSumOfAllElementsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return 0;
  }
  if (obj[key].length === 0) {
    return 0;
  }
  if (!Array.isArray(obj[key])) {
    return 0;
  } else {
    const sumsUp = obj[key].reduce((accum, item) => {
      return accum + item;
    }, 0);
    return sumsUp;
  }
}

var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output);

// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the key, it should return 0.
