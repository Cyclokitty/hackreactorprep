function getLargestNumberAmongMixedElements(arr) {
  if (!arr.length){
    return 0;

  }
  var largest;
  arr.forEach(function(val){
  	if (typeof(val) === 'number' && largest === undefined){
  		largest = val;
  	}else if(typeof(val) === 'number' && val > largest){
  		largest = val;
  	}
  });
  if (largest === undefined){
  	return 0;
  } else {
  	return largest;
  }
}


var output = getLargestNumberAmongMixedElements([-3, 'word', -5, 'up', -3, -6]);
console.log(output); // --> 5

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.
