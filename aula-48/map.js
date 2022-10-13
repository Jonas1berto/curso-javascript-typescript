// Map sempre vai ter o mesmo tamanho do array original
// Map pode modificar os valores do array

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobroNumeros = numeros.map(valor => {
  return valor * 2
})
console.log(dobroNumeros)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Jonas', idade: 22 },
  { nome: 'Maria', idade: 21 },
  { nome: 'Felipe', idade: 32 },
  { nome: 'Savio', idade: 19 },
  { nome: 'João', idade: 20 }
]
const returnNome = pessoas.map(valor => {
  return valor.nome
})
console.log(returnNome)

/*
const removeNome = pessoas.map(valor => {
  delete valor.nome
  return valor
})
console.log(removeNome)
*/

const adcId = pessoas.map((valor, indice) => {
  const newValor = valor
  newValor.Id = indice + 1
  return newValor
})
console.log(adcId)
