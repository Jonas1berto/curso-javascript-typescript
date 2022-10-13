// Filter -> Sempre vai retornar um array, com a mesma quantidade de elemento ou menos.
// Retornar os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/*
for (let valor of numeros) {
  if (valor >= 10) {
    console.log(valor)
  }
}
*/
/*
function callbackFilter(valor) {
  if (valor > 10) {
    return true
  } else {
    return false
  }
}
*/

// Filter pode receber 3 parametros filter(valor, indice, array)
const numerosFiltrados = numeros.filter(valor => {
  if (valor > 20) {
    return true
  }
})
console.log(numerosFiltrados)

// Retornar as pessoas que tem o nome com 5 letras ou mais
// Retornar as pessoas com mais de 20 anos
// Retornar as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Jonas', idade: 22 },
  { nome: 'Maria', idade: 21 },
  { nome: 'Felipe', idade: 32 },
  { nome: 'Savio', idade: 19 },
  { nome: 'João', idade: 20 }
]

const pessoasNome = pessoas.filter(valor => {
  if (valor.nome.length >= 5) {
    return true
  }
})

console.log(pessoasNome)

const pessoasIdade = pessoas.filter(valor => {
  if (valor.idade >= 20) {
    return true
  } else {
    return false
  }
})
console.log(pessoasIdade)

const nomesFiltrados = pessoas.filter(valor => {
  // endsWith é utilizado para checar o ultimo valor da string
  if (valor.nome.toLowerCase().endsWith('a')) {
    return true
  }
})
console.log(nomesFiltrados)
