function getLongestOfThreeWords(word1, word2, word3) {
  var words = [...arguments];
  var longest = 0;
  var longestWord;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
      longestWord = words[i]
    } else if (words[i].length === longest) {
      longest = longest;
      longestWord = longestWord;
    }
  }
  return longestWord;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); 
