function getLastElementOfProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }
  if (!Array.isArray(obj[key])) {
    return undefined;
  }
  if (obj[key].length === 0) {
    return undefined;
  } else {
    var len = obj[key].length - 1;
    return obj[key][len];
  }
}

var obj = {
  data: [1, 2, 3, 4, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); 
