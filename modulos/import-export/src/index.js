// Com o as consegue renomear o nome da variavel importada 
import { nome as nomeImportado, sobrenome, idade } from './modulo1'

console.log(`O ${nomeImportado} ${sobrenome}, tem ${idade} anos`)

import { soma } from './modulo1'
const resultado = soma(2, 5)
console.log(resultado)

import { Car } from './modulo1'
const carro = new Car('Fusca', 15000)
console.log(carro)

// Pegando o valor padrão do arquivo modulo1.
import multiplicar from './modulo1'
console.log(multiplicar(7, 2))

// Da pra importar tudo do modulo assim
// import * as MeuModulo from './modulo1'