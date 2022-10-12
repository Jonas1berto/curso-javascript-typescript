// A função definida com a palvara function tem uma variavel especial que chama arguments que sustenta todos os argumentos enviados.
function funcao(a, b, c) {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }
  console.log(total, a, b, c)
}
funcao(2, 3, 2, 3)

function soma(x, y = 2, c = 4) {
  console.log(x + y + c)
}
soma(2, undefined, 6)

function pessoa([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3)
}
pessoa(['Jonas', 'Humberto', 22])

function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros) {
  if (operador === '+') acumulador += numero
  if (operador === '-') acumulador -= numero
  if (operador === '/') acumulador /= numero
  if (operador === '*') acumulador *= numero
 }
 console.log(acumulador)
}
conta('*', 1, 20, 30, 40, 50)
