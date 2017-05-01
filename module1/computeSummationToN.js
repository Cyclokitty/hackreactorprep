function computeSummationToN(n) {
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

var output = computeSummationToN(6);
console.log(output);
