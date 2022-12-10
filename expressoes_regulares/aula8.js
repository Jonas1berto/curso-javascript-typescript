const { lookahed } = require('./base')

console.log(lookahed)
// console.log(lookahed.match(/.+[^in]active$/gim))

// Positive lookahead (frases que tem active)
// console.log(lookahed.match(/.+(?=[^in]active)/gim))

// Positive lookahead (frases que tem inactive)
// console.log(lookahed.match(/.+(?=\s+inactive)/gim))

// Negative lookahead (frases que NÃO tem active)
// console.log(lookahed.match(/^(?!.+[^in]active).+$/gim))

// Negative lookahead (frases que NÃO tem inactive)
// console.log(lookahed.match(/^(?!.+inactive).+$/gim))

// Positive lookbehind (frases que começam com ONLINE)
// console.log(lookahed.match(/(?<=ONLINE\s+)\S+.*/gim))

// Negative lookbehind (frases que não começam com ONLINE)
// console.log(lookahed.match(/^.+(?<!ONLINE.+)$/gim))
