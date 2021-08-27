const arrayEntry = [['cardonha', 9], ['infelizreprovado',3], ['marcel',9], ['infelizaprovado',3]]
const secondCaseArrayEntry = [['zenon', 5], ['claudete',7], ['zezim', 3], ['anon',5], ['gilberto',10], ['belizaura', 3]]

function sort2dArray (a, b) { /* a e b são duas entradas consecutivas do arrayEntry. Aqui são arrays do tipo: ['nome', nota].*/
/* a[1] e b [1] fazem referêcnia aos elementos de índice 1 (as notas) nos arrays a e b se iguais: */
/* se notas iguais analisa os nomes em ordem alfabética para ordenar */
if (a[1] == b[1]){
    return a[0] < b[0] ? -1 : 1
  }
  return b[1] - a[1]
}
arrayEntry.sort(sort2dArray)
secondCaseArrayEntry.sort(sort2dArray)
console.log(`Instancia 1\nA pessoa reprovada será: ${arrayEntry[arrayEntry.length - 1][0]}`)
console.log(`Instancia 2\nA pessoa reprovada será: ${secondCaseArrayEntry[secondCaseArrayEntry.length - 1][0]}`)