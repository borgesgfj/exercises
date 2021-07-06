const listaPalavras = [
  "a",
  "belo",
  "fino",
  "cruz",
  "batata",
  "abacadabra",
  "aaaabc",
  "abda",
];

function isOrdered(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i + 1] <= words[i]) {
      return false;
    }
  }
  return true;
}

for (let j = 0; j < listaPalavras.length; j++) {
  const answer = isOrdered(listaPalavras[j]);
  console.log(`${listaPalavras[j]} -----> ${answer ? "O" : "N"}`);
}
