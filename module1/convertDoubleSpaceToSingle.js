function convertDoubleSpaceToSingle(str) {
  return str.split('  ').join(' ');
}

convertDoubleSpaceToSingle('Here  are  too  many  spaces.');
