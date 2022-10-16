/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwmPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedades)
*/

const produto = { nome: 'Lápis', preco: 2.2 }
const outraCoisa = { ...produto, cor: 'azul' } // expalhando/copiando o objeto produto aqui atravez do spread
const outroProduto = Object.assign({}, produto, { material: 'porcelana' }) // copiando o objeto produto para esse aqui
outraCoisa.nome = 'Caneta'
outraCoisa.preco = 3.8
// produto.nome = 'Jonas Humberto'
console.log(outraCoisa)
console.log(produto)
console.log(outroProduto)

console.log(Object.keys(produto)) // mostrando as chaves do produto
