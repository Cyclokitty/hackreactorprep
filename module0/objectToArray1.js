function getAllKeys(obj) {
  var arr = [];
  for (var item in obj) {
    if(obj.hasOwnProperty(item)) {
      arr.push(item);
    }
  }
  return arr;
}

getAllKeys({a:1,b:2,c:3});
