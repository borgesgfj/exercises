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

function selectNumberPairs(map, array) {
  const validPairs = [];
  for (let i = 0; i < array.length; i++) {
    const difference = sumResult - array[i];
    if (map.has(difference)) {
      validPairs.push([difference, array[i]]);
    }
  }
  return validPairs;
}

for (let n = 0; n < testCase.length; n++) {
  console.log(`Caso ${n + 1}: Pares de números cuja soma é ${sumResult}`);
  console.log(selectNumberPairs(convertArrayToMap(testCase[n][0]), testCase[n][1]));
}
