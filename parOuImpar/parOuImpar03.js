const primeiro = [randomNumber(0, 10), randomNumber(0, 10), randomNumber(0, 10), randomNumber(0, 10), randomNumber(0, 10), randomNumber(0, 10)]

const segundo = [randomNumber(0, 10), randomNumber(0, 10), randomNumber(0, 10), randomNumber(0, 10), randomNumber(0, 10), randomNumber(0, 10)]

function randomNumber(min, max) {
  return Math.floor(Math.random()*(max + 1 - min) + min)
}

let vitoriasPrimeiro = 0
let vitoriasSegundo = 0

function resultados(n1, n2) {
  const soma = n1 + n2
  if (soma % 2 == 0) {
    vitoriasPrimeiro += 1
  } else{
    vitoriasSegundo +=1
  }
  console.log(soma)
}

for (let i = 0; i < primeiro.length; i++) {
  resultados(primeiro[i], segundo[i])
}

function venceu(vitoriasPrimeiro, vitoriasSegundo) {
  if (vitoriasPrimeiro > vitoriasSegundo) {
    return vencedor = "PRIMEIRO"
  } else if (vitoriasSegundo > vitoriasPrimeiro) {
    return vencedor = "SEGUNDO"
  } else {
    return vencedor = "EMPATE"
  }
}

console.log(`DEU ${venceu(vitoriasPrimeiro, vitoriasSegundo)} \nPRIMEIRO ${vitoriasPrimeiro} X SEGUNDO ${vitoriasSegundo}.`)