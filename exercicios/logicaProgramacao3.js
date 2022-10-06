function getNumber(num) {
  let dividirPor3 = num % 3 === 0
  let dividirPor5 = num % 5 === 0

  if (dividirPor3 / 3 && dividirPor5 / 5) {
    return 'FizzBuzz'
  } else if (dividirPor5 / 5) {
    return 'Buzz'
  } else if (dividirPor3 / 3) {
    return 'Fizz'
  } else {
    return `não é divisivel por 3 e 5`
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(i, getNumber(i))
}
