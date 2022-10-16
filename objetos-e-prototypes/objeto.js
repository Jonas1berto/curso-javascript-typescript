// Revisão de objetos

/*
const pessoa = {
  nome: 'Jonas',
  sobrenome: 'Humberto',
  idade: 22
}
console.log(pessoa['nome'])
console.log(pessoa.sobrenome)
*/

const pessoa1 = new Object()
pessoa1.nome = 'Junior'
pessoa1.sobrenome = 'Gomes'
pessoa1.idade = 22
pessoa1.falarNome = function () {
  console.log(`Meu nome é ${this.nome}`)
}
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade
}
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
pessoa1.falarNome()
// delete pessoa1.nome
// console.log(pessoa1)
console.log(pessoa1.getDataNascimento())

// Vendo todas as chaves na pessoa1
for (let chave in pessoa1) {
  console.log(pessoa1[chave])
}

// Factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}
const p1 = criaPessoa('Jonas', 'Humberto')
console.log(p1.nomeCompleto)

// Function Constructor
function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}

const person1 = new Pessoa('João', 'Gabriel')
console.log(person1)
