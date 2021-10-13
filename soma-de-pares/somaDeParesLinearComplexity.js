const testCase = [
  [
    [3, 1, 2, 11, 6, 4, 5],
    [1, 3, 8, 5, 9, 7],
  ],
];
const sumResult = 10;
const numericalOrdering = (a, b) => a - b;
const mapNumbers = new Map();
const convertArrayToMap = (number, indexInArray) => mapNumbers.set(number, indexInArray);
function selectNumberPairs(map, array) {
  let validPairs = [];
  for (let i = 0; i < array.length; i++) {
    const difference = sumResult - array[i];
    if(map.has(difference)){
      validPairs.push([difference, array[i]])
    }
  }
  return validPairs
}
for(let n = 0; n < testCase.length; n++) {
  testCase[n][0].forEach(convertArrayToMap);
  console.log(`Caso ${n + 1}: Pares de números cuja soma é ${sumResult}`)
  console.log(selectNumberPairs(mapNumbers, testCase[n][1]));
}

