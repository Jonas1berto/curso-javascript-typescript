// Função recursiva é uma função q se chama

function recursiva(num) {
  console.log(num)
  if (num >= 10) return
  num++
  recursiva(num)
}

recursiva(0)
