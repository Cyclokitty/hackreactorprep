function findMinLengthOfThreeWords(word1, word2, word3) {
  var minimum = arguments[0].length;
  for (var i = 0; i < arguments.length; i++) {
      if (arguments[i].length < minimum) {
          minimum = arguments[i].length;
      }
  }
  return minimum;
}

findMinLengthOfThreeWords('cats', 'pogs', 'ham');
