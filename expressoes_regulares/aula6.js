const { cpfs2 } = require('./base')

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m -> multiline

const cpf = '254.224.877-45'
const cpfRegExp = /(\d{3}\.){2}\d{3}\-\d{2}/g
console.log(cpfs2)
console.log(cpfs2.match(cpfRegExp))
