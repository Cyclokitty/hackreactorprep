function or(expression1, expression2) {
  if (expression1 === true && expression2 === false) {
      return true;
  } else if (expression1 === true && expression2 === true) {
      return true;
  } else if (expression1 === false && expression2 === true) {
      return true;
  } else if (expression1 === false && expression2 === false) {
      return false;
  }
}

or(false, false);
