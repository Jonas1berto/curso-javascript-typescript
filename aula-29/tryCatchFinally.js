/*
try {
  console.log('Abri um arquivo')
  // console.log(error)
  console.log('Manipulei o arquivo')
  console.log('Fechei o arquivo')

  try {
    console.log(a)
    console.log('Deu error')
  } catch (e) {
    console.log('Deu error')
  } finally {
    console.log('Eu sempre sou executado')
  }
} catch (e) {
  console.log('Tratando o error')
} finally {
  console.log('FINALLY: Eu sempre sou executado')
}
*/

function retornaHora(hora) {
  if (hora && !(hora instanceof Date)) {
    throw new TypeError('Esperando instância de Date.')
  }

  if (!hora) {
    hora = new Date()
  }

  return hora.toLocaleTimeString('pt-BR')
}

try {
  const hora = retornaHora()
  console.log(hora)
} catch (e) {
  // Tratar error
  // console.log(e) pra imprimir o erro na tela, se tiver algum error.
} finally {
  console.log('Tenha um bom dia ')
}
