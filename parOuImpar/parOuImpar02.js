const primeiro = [3, 4, 5, 8, 9, 7]
const segundo = [2, 2, 1, 5, 9, 3]
let vitoriasPrimeiro = 0
let vitoriasSegundo = 0
const arraySize = primeiro.length
for (let i = 0; i < arraySize; i++) {
  const soma = primeiro[i] + segundo[i]
  if (soma % 2 == 0) {
    vitoriasPrimeiro += 1
  } else {
    vitoriasSegundo += 1
  }
}
if (vitoriasPrimeiro > vitoriasSegundo) {
  vencedor = "PRIMIERO"
} else if (vitoriasSegundo > vitoriasPrimeiro) {
  vencedor = "SEGUNDO"
} else {
  vencedor = "EMPATADO"
}

console.log(`${vencedor} GANHOU!\nPRIMEIRO ${vitoriasPrimeiro} X SEGUNDO ${vitoriasSegundo}.`)