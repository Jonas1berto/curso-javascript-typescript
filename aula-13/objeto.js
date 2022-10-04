function criarPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}

const pessoa1 = criarPessoa('Jonas', 'Humberto', 22)
const pessoa2 = criarPessoa('Savio', 'Ludovico', 21)
const pessoa3 = criarPessoa('Felip', 'Silva', 21)
const pessoa4 = criarPessoa('Junior', 'Gomes', 20)
const pessoa5 = criarPessoa('João', 'Gabriel', 05)

console.log(pessoa1)

const pessoa = {
  nome: 'Jonas',
  sobrenome: 'Humberto',
  idade: 22,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`)
  },

  incrementaIdade() {
    this.idade++
  }
}

pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
