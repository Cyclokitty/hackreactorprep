function findMaxLengthOfThreeWords(word1, word2, word3) {
  var maximum = arguments[0].length;
  for (var i = 0; i < arguments.length; i++) {
      if (arguments[i].length > maximum) {
          maximum = arguments[i].length;
      }
  }
  return maximum;
}

findMaxLengthOfThreeWords('cats', 'winnebagos', 'hamster');
