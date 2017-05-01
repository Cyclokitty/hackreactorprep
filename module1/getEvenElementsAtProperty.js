function getEvenElementsAtProperty(obj, key) {
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
      return num % 2 === 0;
    });
    return odds;
  }
}

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output);

// Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key. 
