function transformEmployeeData(array) {
  const list = [];
  for (var i = 0; i < array.length; i++) {
    const employees = {};
    for (var j = 0; j < array[i].length; j++) {
      let key = array[i][j][0];
      let val = array[i][j][1];
      employees[key] = val;
    }
    list.push(employees);
  }
  return list;
}

transformEmployeeData(arr);
