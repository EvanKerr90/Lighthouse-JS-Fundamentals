function range(start, end, step) {
  let someArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    return someArray = [];
} else {
  for (var a = start; a <= end; a = a + step) {
  someArray.push(a);
    }
}
return someArray;
}

