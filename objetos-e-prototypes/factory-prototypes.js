// Factory function + prototypes

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`)
 }
}

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`)
  }
}

// os 2 faz a mesma coisa so muda a escrita...
// const pessoaPrototype = Object.assign({}, falar, comer, beber)
const pessoaPrototype = { ...falar, ...beber, ...comer}

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  })
}

const p1 = criaPessoa('Jonas', 'Humberto')
console.log(p1.falar())
