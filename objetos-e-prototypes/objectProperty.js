// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostrar a chave
    value: estoque, // pegando o valor
    writable: false, // pode alterar o valor
    configurable: true // configurável
  })
}
const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
console.log(Object.keys(p1))

for (let chave in p1) {
  console.log(chave)
}
