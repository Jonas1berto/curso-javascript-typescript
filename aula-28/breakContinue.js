const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Continue continua para a próxima iteração
// Break sai do laço

for (let numero of numeros) {
  if (numero === 3) {
    console.log('pulei o numero 3')
    continue // a palavra 'continue' pula o numero q está sendo checado
  }
  console.log(numero)

  if (numero === 5) {
    console.log('O break para o codigo quando a codição for true')
    break; // Para o codigo quando a codição for true;
  }
}
