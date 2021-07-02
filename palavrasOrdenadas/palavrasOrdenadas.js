const listaPalavras = ["a","belo", "fino", "cruz", "batata", "abacadabra", "aaaabc","abda"]

function isOrdered(words) {
  let countOrder = 0
  for(let i = 0; i < words.length-1; i++){
    if (words[i] < words[i+1]) {
      countOrder += 1
    }
  }
  let answer = ""
  if (countOrder == (words.length - 1)){
    answer = "O"
  } else {
    answer = "N"
  }
  console.log(`${words} ------> ${answer}`)
}

for(let j = 0; j < listaPalavras.length; j++) {
  isOrdered(listaPalavras[j])
}

