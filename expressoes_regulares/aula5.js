const { alfabeto } = require('./base')

// [abc] -> Conjunto
// [^] -> Negação
console.log(alfabeto)
console.log(alfabeto.match(/[^abc123]+/g))

console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[\w]+/g))
