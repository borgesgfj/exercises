const testCases = [
  {
    arrayNumbers: [2, 4, 7, 7, 7, 9, 11],
    queries: [7, 10, 4, 2],
  },
  {
    arrayNumbers: [1, 3, 5, 7, 9, 11],
    queries: [3, 6, 8, 11],
  },
  {
    arrayNumbers: [1, 1, 2, 4, 4, 6, 6, 6, 7, 8, 8],
    queries: [1, 4, 6, 8, 10, 2]
  }
];

function binarySearchWithDuplicated(array, targetNumber) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let firstOccurrence = -1;
  while (minIndex <= maxIndex) {
    let middle = Math.floor((maxIndex + minIndex) / 2);
    if (array[middle] == targetNumber) {
      firstOccurrence = middle;
      maxIndex = middle - 1;
    } else if (targetNumber > array[middle]) {
      minIndex = middle + 1;
    } else {
      maxIndex = middle - 1;
    }
  }
  return firstOccurrence;
}

for (let i = 0; i < testCases.length; i++) {
  console.log(`------ Caso: ${i + 1} ------`);
  for (let j = 0; j < testCases[i].queries.length; j++) {
    console.log(
      `${testCases[i].queries[j]} --> índice: ${binarySearchWithDuplicated(
        testCases[i].arrayNumbers,
        testCases[i].queries[j]
      )}`
    );
  }
}
