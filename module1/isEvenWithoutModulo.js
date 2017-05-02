function isEvenWithoutModulo(num) {
  var number = Math.abs(num);
  while(number >= 2){
    number -= 2;
  }
  return number === 0;
}

var output = isEvenWithoutModulo(8);
console.log(output); 
