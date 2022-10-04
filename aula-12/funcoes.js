/*
function saudacao(nome) {
  console.log(`Bom dia ${nome}!`)
}

saudacao('Jonas')
saudacao('Junior')
saudacao('Gabriel')
*/

/*
function saudacao(nome) {
  return `Bom dia ${nome}!`
}

const variavel = saudacao('Jonas')
console.log(variavel)
*/

function soma(x, y) {
  const resultado = x + y
  return resultado
}

function diminuir(x, y) {
  const resultado = x - y
  return resultado
}

console.log(soma(2, 5))
console.log(diminuir(2, 8))

const raiz = (n) => {
  return n ** 0.5
}

console.log(raiz(16))
