// Escreva uma função que recebe 2 números e retorne o maior deles

// Com a function normal
function maiorNumero(num1, num2) {
  if (num1 > num2) {
    console.log(`O maior número é ${num1}`)
  } else if (num2 > num1) {
    console.log(`O maior número é ${num2}`)
  }
}

maiorNumero(8, 10)

// Com a arrow Function

const numeroMax = (x, y) => {
  // se x for maior q y retorna x, se não retorna y
  return x > y ? x : y
}

numeroMaior = numeroMax(5, 15)
console.log(`O número maximo é: ${numeroMaior}`)
