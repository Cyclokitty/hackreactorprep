function multiply(num1, num2) {
  if (num1 < 0) {
        return -(multiply(-num1, num2));
      } else if (num2 < 0) {
        return -(multiply(num1, -num2));
      } else {
        var total = 0;
        for (var i = 0; i < num2; i++) {
          total += num1;
        }
        return total;
      }
  }

var output = multiply(4, -7);
console.log(output); // --> 28

// Do not use * operation
