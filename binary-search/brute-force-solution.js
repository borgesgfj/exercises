const testCases = [
  {
    arrayNumbers: [2, 4, 7, 7, 9],
    queries: [7, 10, 4, 2],
  },
  {
    arrayNumbers: [1, 3, 5, 7, 9, 11],
    queries: [3, 6, 8, 11],
  },
];

function checkNumberIndex(listOfNumbers, listOfQueries) {
  let resultsQueries = []
  for(let j = 0; j < listOfQueries.length; j++){
    let elementIndex = -1;
    for(let i = 0; i < listOfNumbers.length; i++) {
      if(listOfNumbers[i] == listOfQueries[j]) {
        elementIndex = i;
        break
      }
    }
    resultsQueries.push(elementIndex)
  }
  return resultsQueries
}
for(let n = 0; n < testCases.length; n++) {
  console.log(checkNumberIndex(testCases[n].arrayNumbers, testCases[n].queries));
}

