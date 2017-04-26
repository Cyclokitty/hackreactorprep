var myObj = {};

function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}


addProperty(myObj, 'myProperty');
console.log(myObj);
