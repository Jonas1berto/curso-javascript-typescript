// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objeto)
// For of - Retorna o valor em si (iteráveis, arrays, ou strings)

const nomes = ['Jonas', 'Felip', 'Savio', 'Junior']

// for (i = 0; i < nomes.length; i++) {
//  console.log(nomes[i])
// }

// for (let i in nomes) {
//  console.log(nomes[i])
// }

for (let valor of nomes) {
  console.log(valor)
}

console.log('--------------------------')

nomes.forEach(function (valor, indice) {
  console.log(valor, indice)
})

console.log('-----')


const pessoa = {
  nome: 'Jonas',
  sobrenome: 'Humberto'
}

for (let i in pessoa) {
  console.log(i, pessoa[i])
}
