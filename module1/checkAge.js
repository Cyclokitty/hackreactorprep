function checkAge(name, age) {
  if (age < 21) {
    return 'Go home, ' + name + '!';
  } else {
    return 'Welcome, ' + name + '!';
  }
}

checkAge('Laura', 45);


// format: Write a function called "checkAge".

// Given a person's name and age, "checkAge" returns one of two messages:

// "Go home, {insert_name_here}!", if they are younger than 21.
// "Welcome, {insert_name_here}!", if they are 21 or older.

// Naturally, replace "{insert_name_here}" with the given name. :)
