const { texto } = require('./base')
const regExp1 = /João|Maria/gi

console.log(texto.match(regExp1))
// Trocando os nomes com replace...
console.log(
  texto.replace(/João/gi, function (input) {
    return input.toUpperCase()
  })
)
