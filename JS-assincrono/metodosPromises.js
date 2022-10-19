// Promise.all, Promise.race, Promise.resolve, Promise.reject
function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('ERROR')
      return
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise')
      return
    }, tempo)
  })
}

const promises = [
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5))
]

// Resolvendo todas as promessas e trazendo os valores de volta, na ordem q foi passada pelo array, com 1 then.
/*
Promise.all(promises)
  .then(valor => {
    console.log(valor)
  })
  .catch(erro => {
    console.log(erro)
  })
*/

// A primeira promise q o race resolve é a q retorna
/*
Promise.race(promises)
  .then(valor => {
    console.log(valor)
  })
  .catch(erro => {
    console.log(erro)
  })
*/

function baixaPagina() {
  const emCache = false

  // resolve cai no then.
  // reject cai no catch.
  // se ocorrer qualuqer tipo de erro cai no catch
  if (emCache) {
    return Promise.resolve('Página em cache')
  } else {
    return esperaAi('Página baixada', rand(2, 5))
  }
}

baixaPagina().then(valor => {
  console.log(valor)
}).catch(error => {
  console.log(error)
})
