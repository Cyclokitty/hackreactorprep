function areValidCredentials(name, password) {
  return name.length >= 3 && password.length >= 8 ? true : false;
}

// function areValidCredentials(name, password) {
//   if (name.length >= 3 && password.length >= 8) {
//       return true;
//   } else {
//       return false;
//   }
// }

areValidCredentials('fd', 'abc');
