function select(arr, obj) {
  if (arr.length === 0) {
      return [];
  }
  var matchObj = {};
  for (var i = 0; i < arr.length; i++) {
      if (obj.hasOwnProperty(arr[i])) {
          matchObj[arr[i]] = obj[arr[i]];
      }
  }
  return matchObj;
}

var arr = ['a', 'c', 'e', 'd'];

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};




select(arr, obj);

//Write a function called "select".

// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

// Notes:
// * If keys are present in the given array, but are not in the given object, it should ignore them.
// * It does not modify the passed in object.
