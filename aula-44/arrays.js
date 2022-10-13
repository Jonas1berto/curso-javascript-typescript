// Valor por referência
// indices        0        1         2
const nomes = ['Jonas', 'Junior', 'João', 'Felip', 'Savio']
// fazendo uma copia com o spread, ai pode modificar o array sem alterar o original.
const novo = [...nomes]

// pop remove o ultimo indice do array
novo.pop()

// shift remove do começo
novo.shift()

// unshift adicona no começo do array
novo.unshift('Gabriel')

// push adiciona no final do array
novo.push('Savio')
console.log(novo)
console.log(nomes)

// pegando o tamanho do array
console.log(nomes.length)

// o metodo slice fatia o array.
console.log(nomes.slice(1, 4))

const person = 'Jonas Humberto Melo'
// split transforma uma string em um array
personagem = person.split(' ')
console.log(personagem)

const array = ['Gabriel', 'Matheus', 'Moura']
// join transforma um array em uma string
console.log(array.join(' '))
