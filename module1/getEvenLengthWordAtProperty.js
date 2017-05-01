function getEvenLengthWordsAtProperty(obj, key) {
  var newArr = [];
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  if (!Array.isArray(obj[key])) {
    return [];
  }
  if (obj[key].length === 0) {
    return [];
  } else {
    for (var i = 0; i < obj[key].length; i++) {
      if (obj[key][i].length % 2 === 0) {
        newArr.push(obj[key][i]);
      }
    }
  }
  return newArr;
}

var obj = {
  key: ['a', 'long', 'game', 'of', 'Quidditch']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output);

// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.
