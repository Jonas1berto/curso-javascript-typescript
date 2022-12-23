type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Jonas',
  sobrenome: 'Humberto',
  idade: 22,
};

console.log(pessoa);

// Module mode
export { pessoa };
