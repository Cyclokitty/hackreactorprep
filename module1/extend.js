function extend(obj1, obj2) {
  aProps = Object.getOwnPropertyNames(obj1);
  bProps = Object.getOwnPropertyNames(obj2);

  for (var i = 0; i < bProps.length; i++) {
    var propName = bProps[i];
    if (obj1.hasOwnProperty(propName) !== obj2.hasOwnProperty(propName)) {
      obj1[propName] = obj2[propName];
    }
  }
  return obj1;
}

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
