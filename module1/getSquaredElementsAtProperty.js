function getSquaredElementsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  if (!Array.isArray(obj[key])) {
    return [];
  }
  if (obj[key].length === 0) {
    return [];
  } else {
    const squared = obj[key].map(item => {
      return Math.pow(item, 2);
    });
    return squared;
  }
}


var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output);


// Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.
