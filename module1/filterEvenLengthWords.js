function filterEvenLengthWords(words) {
  const even = words.filter(word => {
    if (word.length % 2 === 0) {
      return word;
    }
  });
  return even;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output);
