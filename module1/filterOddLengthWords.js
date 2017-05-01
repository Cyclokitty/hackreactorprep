function filterOddLengthWords(words) {
  const filtered = words.filter(word => {
    return word.length % 2 !== 0;
  });
  return filtered;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output);
