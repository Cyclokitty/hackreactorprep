function countNumberOfKeys(obj) {
  var count = 0;
  for (var item in obj) {
    count++;
  }
  return count;
}

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); 
