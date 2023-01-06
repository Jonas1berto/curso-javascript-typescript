interface Pessoa {
  nome: string;
}

interface Pessoa {
  // readonly -> não deixa mudar o valor.
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Jonas',
  sobrenome: 'Humberto',
  enderecos: ['Rua 1'],
  idade: 22,
};

console.log(pessoa);
