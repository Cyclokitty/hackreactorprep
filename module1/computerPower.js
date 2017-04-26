function computePower(num, exponent) {
    total = 1;
  for (var i = 1; i <= exponent; i++) {
      total*= num;
  }
  return total;
}

computePower(5, 3);
