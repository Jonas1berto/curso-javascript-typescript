// Com a class
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
  falar() {
    console.log(`${this.nome} está falando.`)
  }
  beber() {
    console.log(`${this.nome} está bebendo`)
  }
  comer() {
    console.log(`${this.nome} está comendo`)
  }
}
const p1 = new Pessoa('Jonas', 'Humberto')
p1.comer()

// Com a função construtora
function Pessoa2(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}
Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`)
}

const p2 = new Pessoa2('Gabriel', 'Melo')
p2.falar()
