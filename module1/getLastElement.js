function getLastElement(array) {
  if (array.length === 0) {
      return undefined;
  } else {
      return array.pop();
  }
}

getLastElement([10, 20, 30, 40, 50]);
