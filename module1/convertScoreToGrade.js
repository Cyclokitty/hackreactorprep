function convertScoreToGrade(score) {
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  }
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else if (score < 60) {
    return 'F';
  }
}

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (59  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

var output = convertScoreToGrade(50);
console.log(output);
