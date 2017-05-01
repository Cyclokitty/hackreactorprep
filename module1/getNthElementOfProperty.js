function getNthElementOfProperty(obj, key, n) {
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }
  if (!Array.isArray(obj[key])) {
    return undefined;
  }
  if (obj[key].length === 0) {
    return undefined;
  }
  if (obj[key].length < n) {
    return undefined;
  }
  else {
    return obj[key][n];
  }
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 10);
console.log(output);
