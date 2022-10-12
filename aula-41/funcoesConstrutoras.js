// Função construtora retorna objeto
// Função fabrica retorna objeto
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome, idade) {
  // Pessoa.nome = nome
  this.nome = nome
  // Pessoa.sobrenome = sobrenome
  this.sobrenome = sobrenome
  this.idade = idade

  this.fala = () => {
    console.log(`Ola sou o ${nome} ${sobrenome}`)
  }
}

const p1 = new Pessoa('Jonas', 'Humberto', 22)
const p2 = new Pessoa('Junior', 'Gomes')
p1.fala()
