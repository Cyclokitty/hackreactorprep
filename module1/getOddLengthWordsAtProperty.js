function getOddLengthWordsAtProperty(obj, key) {
  var oddWords = [];
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
      if (obj[key][i].length % 2 !== 0) {
        oddWords.push(obj[key][i]);
      }
    }
  }
  return oddWords;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);
