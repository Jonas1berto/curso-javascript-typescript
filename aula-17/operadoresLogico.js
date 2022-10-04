/*
Operadores Lógicos

&& -> AND -> E // Todas as expressões precisam ser verdadeiras para retornar true

|| -> OR -> OU // Se qualquer expressão for verdadeiro retorna true

! -> NOT -> NÂO
*/

console.log(true && true)
console.log(true || false)

const usuario = 'Jonas' // form usuário digitou
const senha = '123456' // form usuário digitou

const vaiLogar = usuario === 'Jonas' && senha === '12345'
console.log(vaiLogar)

console.log(!false) // negando o false, ai ele retorna true
console.log(!true) // negando o true, retorna false
