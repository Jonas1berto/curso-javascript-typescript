// Quando utiliza a palavra return
// Retorna um valor e a função termina.

function soma(x, y) {
  return x + y
}

console.log(soma(5, 7))

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  }
}
const p1 = criaPessoa('Jonas', 'Humberto')
console.log(p1)

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto
  }
  return falaResto
}

const fala = falaFrase('Ola eu sou o')
const resto = fala('Jonas')
console.log(resto)

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador
  }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

console.log('--------')

// Prefiro usar a function assim
function multiplicador(multiplicador, number) {
  return multiplicador * number
}
console.log(multiplicador(3, 2))
