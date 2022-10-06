// for é uma estrutura de repetição

// i - index
for (let i = 0; i <= 10; i++) {
  // checando se o numero é impar
  const par = i % 2 === 0 ? 'par' : 'impar'
  console.log(`Linha ${i}, ${par}`)
}

for (let i = 5; i >= 0; i--) {
  console.log(i)
}

const frutas = ['Maçã', 'Uva', 'Pera', 'Laranja', 'Abacate']

for (let i = 0; i < frutas.length; i++) {
  console.log(`Indice ${i}`, frutas[i])
}
