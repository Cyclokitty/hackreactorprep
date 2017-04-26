function isPersonOldEnoughToDrive(person) {
  return person.age >= 16 ? true : false;
}

var obj = {
  age: 12
};

isPersonOldEnoughToDrive(obj);
