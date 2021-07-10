const wordsList = ["UFRN", "contest", "AcM", "rodou", "baca", "ba","da","aba"];

function assingnNumberToWord(word) {
  let wordNumber = 0;
  for (let j = 0; j < word.length; j++) {
    /* let theLetter = word[j] */
    if (word[j] == word[j].toUpperCase()) {
      wordNumber += word.charCodeAt(j) - 38
    } else {
      wordNumber += word.charCodeAt(j) - 96
    }
  }
  return wordNumber;
}

function isPrimeWord(num) {
  if (num % 2 == 0 && num != 2) {
    return false;
  }
  for (let k = 3; k < num / 2; k++) {
    if (num % k == 0) {
      return false
    }
  }
  return true
}

for (let i = 0; i < wordsList.length; i++) {
  const answer = isPrimeWord(assingnNumberToWord(wordsList[i]))
  console.log(`${wordsList[i]} --------> ${answer ? 'It is a prime word!' : 'It is not a prime word!'}`)
}
