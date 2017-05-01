function getFirstElementOfProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }
  if (!Array.isArray(obj[key])) {
    return undefined;
  }
  if (obj[key].length === 0) {
    return undefined;
  } else {
    return obj[key][0];
  }
}

var obj = {
  key: 10
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); 
