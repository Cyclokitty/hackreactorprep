function getIndexOf(char, str) {
  if (!str.includes(char)) {
      return -1;
  }
  for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
          return parseInt([i]);
      }
  }
}

getIndexOf('z', 'get me a basket of kittens');
