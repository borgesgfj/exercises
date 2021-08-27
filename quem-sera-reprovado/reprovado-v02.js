const arrayEntries = [
  [['cardonha', 9], ['infelizreprovado',3], ['marcel',9], ['infelizaprovado',3]],
  [['zenon', 5], ['claudete',7], ['zezim', 3], ['anon',5], ['gilberto',10], ['belizaura', 3]]
]

function sort2dArray (a, b) {
if (a[1] == b[1]){
    return a[0] < b[0] ? -1 : 1
  }
  return b[1] - a[1]
}

for (let i = 0; i < arrayEntries.length; i++) {
  arrayEntries[i].sort(sort2dArray)
  console.log(`Instância ${i+1} \n A pessoa reprovada é: ${arrayEntries[i][arrayEntries[i].length -1][0]}`)
}
