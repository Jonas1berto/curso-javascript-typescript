const nome = 'Jonas'
const sobrenome = 'Humberto'

const falaNome = () => {
  return `${nome} ${sobrenome}`
}


// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
// this aponta pro module.exports
this.qualquerCoisa = 'O que eu quiser importar'

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

exports.Pessoa = Pessoa