const pessoa = {
  nome: 'Jonas',
  sobrenome: 'Humberto',
  idade: 22,
  endereco: {
    rua: 'Av Brasil',
    numero: 20
  }
}

// Atribuição via desestruturação
const {
  nome = 'Nome não encontrado',
  sobrenome,
  endereco: { rua, numero }
} = pessoa
console.log(nome, sobrenome, rua, numero)
