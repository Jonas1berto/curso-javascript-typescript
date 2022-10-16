// new Objetc -> Object.prototype
const objtA = {
  chaveA: 'A'
  // __proto__: Object.prototype
}

// new Objetc -> Object.prototype
const objtB = {
  chaveB: 'B'
  // __proto__: objA
}

const objtC = {
  chaveC: 'C'
}

Object.setPrototypeOf(objtB, objtA)
Object.setPrototypeOf(objtC, objtA)
console.log(objtC.chaveA)

function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100)
}
Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100)
}

const produto1 = new Produto('Camisa', 19.9)

produto1.aumento(0)
console.log(produto1)

// objeto literal
const p2 = {
  nome: 'Calça',
  preco: 260
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(100)
console.log(p2)

const p3 = Object.create(Produto.prototype)
p3.nome = 'Moletom'
p3.preco = 100
p3.aumento(10)
console.log(p3)
