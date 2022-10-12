// IIFE -> Immediately invoked function expression
;(function () {
  const nome = 'Jonas'
  console.log(nome)
})()
// Aqui são 2 funções anomimas que são ativadas imediatamentes.
;(function (idade, peso, altura) {
  const sobrenome = 'Humberto'
  function criaNome(nome) {
    return nome + ' ' + sobrenome
  }

  function falaNome() {
    nomeCompleto = criaNome('Jonas')
  }
  falaNome()
  console.log(
    `${nomeCompleto} com a idade de: ${idade} anos, pesa: ${peso}kg, com a altura de: ${altura}`
  )
})(22, 70, 1.8)
