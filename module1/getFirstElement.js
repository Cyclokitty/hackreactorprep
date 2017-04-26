function getFirstElement(array) {
  if (array.length === 0) {
      return undefined;
  } else {
      return array.shift();
  }
}

getFirstElement([10, 20, 30]);
