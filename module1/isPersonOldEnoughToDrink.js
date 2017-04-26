function isPersonOldEnoughToDrink(person) {
  return person.age >= 21 ? true : false;
}

var obj = {
  age: 20
};

isPersonOldEnoughToDrink(obj);
