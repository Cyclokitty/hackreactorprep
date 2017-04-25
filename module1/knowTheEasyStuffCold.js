// answers to the three easy questions a js coder should rattle off like a birthday or fav colour

// I rattled these off very quickly. Even re-did the total of an array because I wanted to do one without a higher function (.reduce)

function capital(str) {
  if (str[0] == str[0].toUpperCase()) {
    return 'yeah!';
  } else {
    return 'heck naw';
  }
}

capital('cats');

function areaCircle(r) {
  return Math.floor(Math.PI * (r * r));
}

areaCircle(5);

function totalAll(arr) {
  const tot = arr.reduce((accum, i) => {
    return accum + i;
  }, 0);
  return tot;
}

totalAll([10, 20, 30, 40, 50]);

function totalUp(arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

totalUp([10, 20, 30, 40, 50]);
