// Quantificadores
// * (opcionais) 0 ou mais vezes
// + (obrigatórios) 1 ou mais vezes
// ? (opcionais) 0 ou 1
// \ Caractere de escape
/*
 {min, max}
 {10, } no mínimo 10, começa no 10
 { ,10} de 0 a 10, maximo 10
 {5, 10} de 5 a 10.
*/

const { texto, arquivos } = require('./base')
/*
console.log(texto)

const regExp1 = /Jo+ão+/gi
console.log(texto.match(regExp1))
*/

// Faz exatamente a mesma coisa, so com a escrita diferente...
// const regExp2 = /\.(jpg|jpeg)/gi
const regExp2 = /\.jpe?g/gi

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2)

  if (valido) {
    console.log(arquivo)
  } else {
    console.log('Inválido')
  }
}
