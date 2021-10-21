const testCase = [
  [1, 3, 4, 5, 6, 2, 11],
  [1, 3, 8, 5, 9],
];
const sumResult = 10;
function selectNumberPairs(arrayNumbers1, arrayNumbers2) {
  let validPairs = [];
  for (let i = 0; i < arrayNumbers1.length; i++) {
    for (let j = 0; j < arrayNumbers2.length; j++) {
      if (arrayNumbers1[i] + arrayNumbers2[j] == sumResult) {
        validPairs.push([arrayNumbers1[i], arrayNumbers2[j]]);
      }
    }
  }
  return validPairs;
}

console.log(selectNumberPairs(testCase[0], testCase[1]));
