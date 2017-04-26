function isPersonOldEnoughToVote(person) {
  return person.age >= 18 ? true : false;
}

var obj = {
  age: 25
};

isPersonOldEnoughToVote(obj);
