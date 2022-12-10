// g - global (encontra todas as ocorrências)
// i - insensitive (busca nome maiúsculo ou minúsculo.)
// () - grupos
// | - ou

const { texto } = require('./base')

const regExp1 = /João/gi

console.log(regExp1.test(texto))

const regExp2 = regExp1.exec(texto)

console.log(regExp2[0])
