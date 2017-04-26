function addFullNameProperty(obj) {
    obj.fullName = obj.firstName + ' ' + obj.lastName;
    return obj.fullName;
}

var person = {
  firstName: 'Tim',
  lastName: 'Goldfish'
};

addFullNameProperty(person);
