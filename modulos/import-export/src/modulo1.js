export { nome, sobrenome, idade }

const nome = 'Jonas'
const sobrenome = 'Humberto'
const idade = 22

export function soma(x, y) {
  return x + y
}

export class Car {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco
  }
}

export default (x, y) => x * y

// Com o export default, torna o elemento no valor padrão ou seja, pra importar não precisa usar as chaves, e pode chamar com qualquer nome, e so pode ter 1 default por arquivo, ja q esse default vai se tornar o valor padrão do arquivo.