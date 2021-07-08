/* criando o dicionário : {a : 1, b : 2, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i :9, j : 10, l : 11, ....} */
const dictionary = {}
const arrayLowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const toUpper = (letter) => letter.toUpperCase()
const arrayUpperLetters = arrayLowerLetters.map(toUpper)
const upperAndLowerLetters = arrayLowerLetters.concat(arrayUpperLetters)

upperAndLowerLetters.forEach(creatDictionary)

function creatDictionary (item, index) {
  dictionary[item] = index + 1
}
// -----------------------------------------------------------------------------------------------------------------
const wordsList = ["UFRN", "contest", "AcM", "rodou", "baca"]

function assingnNumberToWord(word) {
  let wordNumber = 0
  for(let j = 0; j < word.length; j++) {
    theLetter = word[j]
    wordNumber += dictionary[theLetter]
  }
  return wordNumber
}

function isPrimeWord(num) {
  let counter = 0
  for(let k = 1; k < num; k++) {
    if(num % k == 0) {
      counter += 1
    }
  }
  return counter < 2 ? "It is a prime word" : "It is not a prime word"
}

for(let i = 0; i < wordsList.length; i++) {
  console.log(`${wordsList[i]} --------> ${isPrimeWord(assingnNumberToWord(wordsList[i]))}`)
}
