function loopyLighthouse(range, multiples, words) {
var word1 = words[0];
var word2 = words[1];

  for (var i = range[0]; i <= range[1]; i++) {
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
    console.log(word1.concat(word2));
    } else if (i % multiples[0] === 0) {
    console.log(word1);
    } else if (i % multiples[1] === 0) {
    console.log(word2);
    } else {
    console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);