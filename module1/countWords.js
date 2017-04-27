function countWords(str) {
  var output = {};
  if (!str) {
      return output;
  }
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
      if (output.hasOwnProperty(words[i])) {
          var addOne = output[words[i]];
          output[words[i]] = ++addOne;
      } else {
          output[words[i]] = 1;
      }
  }
  return output;
}

countWords('ask a bunch get a bunch');
