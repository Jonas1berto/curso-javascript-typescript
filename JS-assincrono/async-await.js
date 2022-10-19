// Utilizando async e await
function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('ERROR')
        return
      }

      resolve(msg.toUpperCase() + ' - Passei na promise')
      return
    }, tempo)
  })
}

// Sem o async e await
/*
esperaAi('Fase 1', rand(0, 3))
  .then(valor => {
    console.log(valor)
    return esperaAi('Fase 2', rand(0, 2))
  })
  .then(valor => {
    console.log(valor)
    return esperaAi('Fase 3', rand(0, 2))
  })
  .then(valor => {
    console.log(valor)
    return valor
  })
  .then(fase => {
    console.log('Terminamos na fase: ' + fase)
  })
  .catch(e => console.log(e))
*/

// Usando o async e o await
// Try olha as promises tudo, se ocorrer um error ele joga no catch.
async function executa() {
  try {
    const fase1 = await esperaAi('Fase 1', rand(0, 3))
    console.log(fase1)

    const fase2 = await esperaAi(2, rand(0, 3))
    console.log(fase2)

    const fase3 = await esperaAi('Fase 3', rand(0, 3))
    console.log(fase3)
  } catch (e) {
    console.log(e)
  }
}
executa()

// Promises tem 3 estados
// Pending -> pendente
// Fullfilled -> resolvida
// Reject -> rejeitada