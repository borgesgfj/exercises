const testCase = [
  [
    [3, 1, 2, 11, 6, 4, 5],
    [1, 3, 8, 5, 9, 7],
  ],
];
const sumResult = 10;

function convertArrayToMap(array) {
  const mapNumbers = new Map();
  for (let j = 0; j < array.length; j++) {
    mapNumbers.set(array[j], j);
  }
  return mapNumbers;
}

function selectNumberPairs(arrayNumbers1, arrayNumbers2) {
  const validPairs = [];
  const map = convertArrayToMap(arrayNumbers1);
  for (let i = 0; i < arrayNumbers2.length; i++) {
    const difference = sumResult - arrayNumbers2[i];
    if (map.has(difference)) {
      validPairs.push([difference, arrayNumbers2[i]]);
    }
  }
  return validPairs;
}

for (let n = 0; n < testCase.length; n++) {
  console.log(`Caso ${n + 1}: Pares de números cuja soma é ${sumResult}`);
  console.log(selectNumberPairs(testCase[n][0], testCase[n][1]));
}
