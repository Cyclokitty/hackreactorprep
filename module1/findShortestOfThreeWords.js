function findShortestOfThreeWords(word1, word2, word3) {
  var words = [...arguments];
  var shortest = words[0].length;
  var shortestWord = words[0];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length < shortest) {
      shortest = words[i].length;
      shortestWord = words[i];
    } else if (words[i].length === shortest) {
      shortest = shortest;
      shortestWord = shortestWord;
    }
  }
  return shortestWord;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); 
