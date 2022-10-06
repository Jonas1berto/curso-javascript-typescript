/*
let controll = 0

while (controll <= 10) {
  console.log(controll)
  controll++
}
*/

function random(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)

// O laço while é mais utilizado quando vc n sabe quando a condição vai terminar.
// while primeiro ver a condição, se a condição for true, executa o codigo

while (rand !== 20) {
  rand = random(min, max)
  console.log(rand)
}

console.log('#######')

// do while primeiro executa o codigo, dps ele ver a condição
do {
  rand = random(min, max)
  console.log(rand)
} while (rand !== 10)
