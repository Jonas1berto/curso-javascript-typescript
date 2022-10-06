// try é executada quando não há error
// catch é executado quando há error
// finally sempre vai ser executado

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('X e y precisam ser números.')
  }

  return x + y
}

try {
  console.log(soma(3, 5))
  console.log(soma('1', 8))
} catch (error) {
  console.log(error)
  console.log('Error, x e y precisam ser numbers')
}
