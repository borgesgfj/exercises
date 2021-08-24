const arrayEntry = [['cardonha', 9], ['infelizreprovado',3], ['marcel',9], ['infelizaprovado',3]]
const secondCaseArrayEntry = [['zenon', 5], ['claudete',7], ['zezim', 3], ['anon',5], ['gilberto',10], ['belizaura', 3]]
const classification = arrayEntry.sort(sort2dArray)
const classificationSecondCase = secondCaseArrayEntry.sort(sort2dArray)
function sort2dArray (a, b) {
  if (a[1] == b[1]){
    if (a[0] < b[0]) {
      return -1
    } else {
      return 1
    }
  }else {
    return b[1] - a[1]
  }
}
console.log(`Instancia 1\nA pessoa reprovada será: ${classification[classification.length - 1][0]}`)
console.log(`Instancia 2\nA pessoa reprovada será: ${classificationSecondCase[classificationSecondCase.length - 1][0]}`)