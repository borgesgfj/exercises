const testCase = [
  [
    [3, 1, 2, 11, 6, 4, 5],
    [1, 3, 8, 5, 9],
  ],
];
const sumResult = 8;
const numericalOrdering = (a, b) => a - b;

function selectNumberPairs(arrayNumbers1, arrayNumbers2) {
  let validPairs = [];
  for (let i = 0; i < arrayNumbers1.length; i++) {
    for (let j = 0; j < arrayNumbers2.length; j++) {
      if (arrayNumbers1[i] + arrayNumbers2[j] > sumResult) {
        break;
      }
      if (arrayNumbers1[i] + arrayNumbers2[j] == sumResult) {
        validPairs.push([arrayNumbers1[i], arrayNumbers2[j]]);
      }
    }
  }
  return validPairs;
}

for (let n = 0; n < testCase.length; n++) {
  testCase[n][0].sort(numericalOrdering);
  testCase[n][1].sort(numericalOrdering);
  console.log(`Caso ${n + 1} números cuja soma dá ${sumResult}`)
  console.log(selectNumberPairs(testCase[n][0], testCase[n][1]));
}
