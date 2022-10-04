let nome = 'Jonas '
let sobrenome = 'Humberto'
let nomeCompleto = nome + sobrenome
let idade = 22
let peso = 67
let altura = 1.78
let alturaEmDobro = altura * altura
let imc = peso / alturaEmDobro
let anoNascimento = 2022 - idade

console.log(
  `${nomeCompleto} tem ${idade} anos, pesa ${peso}kg, tem ${altura}, e seu IMC é de ${imc.toFixed(
    1
  )}, ${nomeCompleto} nasceu no ano de ${anoNascimento}.`
)
