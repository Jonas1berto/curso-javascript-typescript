const _velocidade = Symbol('velocidade')
class Carro {
  constructor(nome) {
    this.nome = nome
    this[_velocidade] = 0
  }

  set velocidade(valor) {
    if (typeof valor !== 'number') return
    if (valor >= 100 || valor <= 0) return
    this[_velocidade] = valor
  }

  get velocidade() {
    return this[_velocidade]
  }

  acelerar() {
    if (this[_velocidade] >= 100) return
    this[_velocidade]++
  }

  desacelerar() {
    if (this[_velocidade] <= 0) return
    this[_velocidade]--
  }
}
const carro1 = new Carro('Fusca')
for (let i = 0; i <= 80; i++) {
  carro1.acelerar()
}
console.log(carro1.velocidade)

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ')
    this.nome = valor.shift()
    this.sobrenome = valor.join(' ')
  }
}
const pessoa1 = new Pessoa('Jonas', 'Humberto')
pessoa1.nomeCompleto = 'Junior Gomes Melo'
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
