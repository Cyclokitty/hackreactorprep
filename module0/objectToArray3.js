function convertObjectToList(obj) {
  var array = [];
  for (var item in obj) {
    array.push([item, obj[item]]);
  }
  return array;
}

convertObjectToList({
  species: 'canine',
  name: 'Bowser',
  weight: 45
});
