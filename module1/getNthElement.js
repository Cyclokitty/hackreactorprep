function getNthElement(array, n) {
  if (array.length === 0) {
      return undefined;
  } else {
      var item = array.slice(n, n + 1);
      return parseInt(item);
  }
}

getNthElement([10, 20, 30], 2);
