function lastIndexOf(array, value) {

  var match = false;
  var index = 0;

  for(var i = (array.length - 1); i > -1; i--) {
    if (value === array[i]) {
      match = true;
      index = i;
      break;
    }
  } if (match) {
    return index;
  } else {
    return -1;
  }
}

