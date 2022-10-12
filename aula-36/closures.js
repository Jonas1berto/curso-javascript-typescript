//Closures é a habilidade da função de acessar seu escopo léxico

function retornaFuncao(nome) {
  return function () {
    return nome
  }
}

const funcao = retornaFuncao('Jonas')
const funcao2 = retornaFuncao('Humberto')
console.log(funcao)
console.log(funcao2)
console.dir(funcao())
console.dir(funcao2())
