const testCases = [
  [
    ['cardonha', 9],
    ['infelizreprovado', 3],
    ['marcel', 9],
    ['infelizaprovado', 3],
  ],
  [
    ['zenon', 5],
    ['claudete', 7],
    ['zezim', 3],
    ['anon', 5],
    ['gilberto', 10],
    ['belizaura', 3],
  ],
];

function sort2dArray(a, b) {
  // Each item is a tuple (name: str, score: int)
  // Sort items by score in descending order. If there is a tie, sort by name in ascending order
  if (a[1] == b[1]) {
    return a[0] < b[0] ? -1 : 1;
  }
  return b[1] - a[1];
}
for (let i = 0; i < testCases.length; i++) {
  testCases[i].sort(sort2dArray);
  const failedStudant = testCases[i][testCases[i].length - 1][0];
  console.log(`Instância ${i + 1} \n A pessoa reprovada é: ${failedStudant}`);
}
