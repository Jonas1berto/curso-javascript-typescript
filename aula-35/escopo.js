const nome = 'Jonas' // Escopo global

// se não tiver a variavel no Escopo da função, ela vai vir buscar no escopo global
function falaNome() {
  const nome = 'Humberto' // Escopo da função
  console.log(nome)
}

function usarFalaNome() {
  falaNome()
}
usarFalaNome()
