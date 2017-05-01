function getAllButLastElementOfProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  if (!Array.isArray(obj[key])) {
    return [];
  } else {
    obj[key].pop();
    return obj[key];
  }
}

var obj = {
  key: []
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output);

// Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it return an empty array.
// * If there is no property at the key, it should return an empty array. 
