function convertScoreToGradeWithPlusAndMinus(score) {
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  }
  if (score >= 98 && score <= 100) {
    return 'A+';
  } else if (score >= 90 && score <=92) {
    return 'A-';
  } else if (score > 92 && score < 98) {
    return 'A';
  } else if (score >= 88 && score <= 89) {
    return 'B+';
  } else if (score >= 80 && score <= 82) {
    return 'B-';
  } else if (score > 82 && score < 88) {
    return 'B';
  } else if (score >= 78 && score <= 79) {
    return 'C+';
  } else if (score >= 70 && score <= 72) {
    return 'C-';
  } else if (score >72 && score < 78) {
    return 'C';
  } else if (score >= 68 && score <= 69) {
    return 'D+';
  } else if (score > 62 && score < 68) {
    return 'D';
  } else if (score >= 60 && score <= 62) {
    return 'D-';
  } else if (score <= 50) {
    return 'F';
  }
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output);
