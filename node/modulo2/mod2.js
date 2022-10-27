/*
module.exports = function soma(x, y) {
  return x + y
}
*/

module.exports = class Carro {
  constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
  }
  acelerar() {
    console.log('Acelerando')
  }
  freiar() {
    console.log('Freiando')
  }
}