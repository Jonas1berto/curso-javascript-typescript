/*
Entre as 5 - 11 - Bom dia
Entre as 12 - 17 - Boa tarde
Entre as 18 - 23 - Boa noite
Entre as 0 - 4 - Boa madrugada
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// A partir do momento q o if for true, ele para o codigo completo
// Só uma condição do if sera executada

const hora = 4

if (hora >= 5 && hora <= 11) {
  console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite')
} else if (hora >= 0 && hora <= 4) {
  console.log('Boa madrugada')
} else {
  console.log('Tenha um otimo')
}

const dinheiro = 50

if (dinheiro >= 80) {
  console.log('vou pra festa')
} else {
  console.log('vou ficar em casa')
}
