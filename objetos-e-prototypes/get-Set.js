function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  let estoquePrivado = estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostrar a chave
    configurable: true, // configurável
    // trabalho do get é pegar o valor e mostrar o valor
    get: function () {
      return estoquePrivado
    },
    // set modifica o valor
    set: function (valor) {
      if (typeof valor !== 'number') {
        console.log('Valor invalido')
      }
      estoquePrivado = valor
    }
  })
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome
    },
    set nome(valor) {
      nome = valor
    }
  }
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 150
console.log(p1.estoque)

const p2 = criaProduto('Camisa')
console.log(p2.nome)
