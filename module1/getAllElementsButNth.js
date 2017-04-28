function getAllElementsButNth(array, n) {
  var comparer = array[n];
  console.log(comparer);
  const newArr = array.filter(item => {
      if (item !== comparer) {
          return item;
      }
  });
  return newArr;
}

getAllElementsButNth(['apples', 'oranges', 'liver', 'cherries'], 2);
