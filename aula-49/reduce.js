// Some todos os números
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
// reduce(acumulador, valor, indice, array)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce((acumulador, valor) => {
  acumulador = acumulador + valor
  return acumulador
}, 0)
console.log(total)

const numPar = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, [])
console.log(numPar)

const numDobro = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2)
  return acumulador
}, [])
console.log(numDobro)

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Jonas', idade: 22 },
  { nome: 'Maria', idade: 21 },
  { nome: 'Felipe', idade: 32 },
  { nome: 'Savio', idade: 19 },
  { nome: 'João', idade: 20 }
]
const pessoaVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
})
console.log(pessoaVelha)
