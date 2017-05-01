function getStringLength(string) {
  str = string.split('');
  var total = 0;
  while (str[total] !== undefined) {
    total++;
  }
  return total;
}

var output = getStringLength('hello');
console.log(output); // --> 5


// Given a string, "getStringLength" returns the length of the given string.

// Notes:
// * Do NOT use any native 'length' methods.
// * You might consider using 'substring' or 'slice' as alternatives.
