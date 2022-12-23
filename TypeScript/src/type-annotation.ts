/* eslint-disable */


// Tupos básicos (aqui ocorre a inferência)
let nome: string = 'Jonas' // Qualquer tipo de strings...
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, ob1010,0o7744
let adulto : boolean = true; // true ou false
let simbolo : symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1,2,3]
let arrayDeNumeros2: number[] = [1,2,3]
let arrayDeStrings: Array<string> = ['a', 'b']
let arrayDeStrings2: string[] = ['a', 'b']

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Luiz'
};

// Funções
function soma(x: number, y: number) {
  return x + y
}
console.log(soma(2, 4))
