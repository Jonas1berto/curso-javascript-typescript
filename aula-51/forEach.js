const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
num1.forEach((valor, indice, array) => {
  console.log(valor, indice)
})

// Simulando o reduce com forEach

let total = 0
num1.forEach(valor => {
  total += valor
})
console.log(total)
