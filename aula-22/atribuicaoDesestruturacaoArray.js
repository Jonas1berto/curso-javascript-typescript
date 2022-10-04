// ... rest, pra quando quiser pegar o resto das coisas
// ... spread, pra quando quiser espalhar ou distribuir

// const numero = [1, 2, 3, 4, 5]
// const [um, , três, , cinco] = numero
// const [um, dois, ...resto] = numeros
// console.log(um, três, cinco)
// console.log(um, dois)
// console.log(resto)

// indice dos arrays  0          1          2
// indece dos elem 0  1  2    0  1  2    0  1  2
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(numeros[2][1])
const [, , [, , nove]] = numeros
console.log(nove)
