function getOddElementsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  if (!Array.isArray(obj[key])) {
    return [];
  }
  if (obj[key].length === 0) {
    return [];
  } else {
    const odds = obj[key].filter(num => {
      return num % 2 !== 0;
    });
    return odds;
  }
}

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output);

// Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.
