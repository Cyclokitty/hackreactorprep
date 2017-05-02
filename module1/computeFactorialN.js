function computeFactorialOfN(n) {
  var factorial = 1;
  for (var i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

computeFactorialOfN(4);
