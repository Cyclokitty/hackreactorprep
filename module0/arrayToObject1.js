function transformFirstAndLast(array) {
  const first = array[0];
  const last = array[array.length -1];
  const obj = { [first]:last};
  return obj;
}

transformFirstAndLast(['Happy', 'Cats', 'Want', 'Catnip']);
