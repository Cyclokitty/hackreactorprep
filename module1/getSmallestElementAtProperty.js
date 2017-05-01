function getSmallestElementAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }
  if (!Array.isArray(obj[key])) {
    return undefined;
  }
  if (obj[key].length === 0) {
    return undefined;
  } else {
    var least = obj[key][0];
    for (var i = 0; i < obj[key].length; i++) {
      if (obj[key][i] < least) {
        least = obj[key][i];
      }
    }
    return least;
  }
}

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output);

// Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.
