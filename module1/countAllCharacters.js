function countAllCharacters(str) {
  str = str.split('');
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      var count = obj[str[i]];
      obj[str[i]] = ++count;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

countAllCharacters('banana');
