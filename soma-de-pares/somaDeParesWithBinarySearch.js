/* Não pode número repetido por enquanto. */
const testCase = [
  [
    [3, 1, 2, 11, 6, 4, 5],
    [1, 3, 8, 5, 9],
  ],
];
const sumResult = 8;
const numericalOrdering = (a, b) => a - b;

function selectNumberPairs(unorderedArray, orderedArray) {
  let validPairs = [];
  for (let i = 0; i < unorderedArray.length; i++) {
    const querieNumber = sumResult - unorderedArray[i];
    let start = 0;
    let end = orderedArray.length - 1;
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (orderedArray[middle] == querieNumber) {
        validPairs.push([unorderedArray[i], orderedArray[middle]]);
        end = middle - 1;
      } else if (querieNumber > orderedArray[middle]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return validPairs;
}

for (let n = 0; n < testCase.length; n++) {
  testCase[n][1].sort(numericalOrdering);
  console.log(`Caso ${n + 1} números cuja soma dá ${sumResult}`);
  console.log(selectNumberPairs(testCase[n][0], testCase[n][1]));
}
