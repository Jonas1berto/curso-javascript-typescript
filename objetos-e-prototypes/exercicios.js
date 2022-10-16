const geradorCpf = cpf => {
  let cpfLimpo = cpf.replace(/\D+/g, '')
  cpfArray = Array.from(cpfLimpo)
  const lastNumbers = cpfArray.splice(9, 10)
  cpfArray.splice(9, 2)

  const soma1 = [
    Number(cpfArray[0]) * 10,
    Number(cpfArray[1]) * 9,
    Number(cpfArray[2]) * 8,
    Number(cpfArray[3]) * 7,
    Number(cpfArray[4]) * 6,
    Number(cpfArray[5]) * 5,
    Number(cpfArray[6]) * 4,
    Number(cpfArray[7]) * 3,
    Number(cpfArray[8]) * 2
  ]

  const firstNumber = soma1.reduce((acumulador, valor) => {
    return (acumulador += valor)
  }, 0)

  let result1 = 11 - (firstNumber % 11)
  console.log(result1)

  const soma2 = [
    Number(cpfArray[0]) * 11,
    Number(cpfArray[1]) * 10,
    Number(cpfArray[2]) * 9,
    Number(cpfArray[3]) * 8,
    Number(cpfArray[4]) * 7,
    Number(cpfArray[5]) * 6,
    Number(cpfArray[6]) * 5,
    Number(cpfArray[7]) * 4,
    Number(cpfArray[8]) * 3,
    result1 * 2
  ]

  const secondNumber = soma2.reduce((acumulador, valor) => {
    return (acumulador += valor)
  }, 0)

  let result2 = 11 - (secondNumber % 11)
  console.log(result2)

  if (result1 > 9) {
    result1 = 0
  }

  if (result2 > 9) {
    result2 = 0
  }

  if (
    result1 === Number(lastNumbers[0]) &&
    result2 === Number(lastNumbers[1])
  ) {
    console.log(`o CPF ${cpf} é valido`)
  } else {
    console.log('CPF invalído')
  }
}
geradorCpf('705.484.450-52')
