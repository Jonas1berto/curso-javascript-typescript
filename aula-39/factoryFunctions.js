// Funções fábrica (factory functions)
// factory functions são funções q retornam objeto
// function constructor
function criaPessoa(nome, sobrenome, alt, p) {
  return {
    nome,
    sobrenome,
    // Get faz a função fingir ser um atributo
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
      console.log(valor)
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}`
    },

    altura: alt,
    peso: p,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Jonas', 'Humberto', 1.8, 68.8)
console.log(p1.imc)
const p2 = criaPessoa('Junior', 'Gomes', 1.76, 70)
console.log(p2.fala('estudando JS'))
p1.nomeCompleto = 'Jose gomes de melo'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())
