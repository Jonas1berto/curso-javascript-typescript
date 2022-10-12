// Declaração de função (Function hoisting) = pode chamar a função antes de declarar ela ou apos.
function falaOi() {
  console.log('Oi Mundo')
}
falaOi()

// As funçoes são First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log('Sou um dado')
}

function executaFuncao(funcao) {
  console.log('Vou executar a função abaixo')
  funcao()
}
executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto posso ter uma função

const obj = {
  falar() {
    console.log('Ola pessoas.')
  }
}
obj.falar()
