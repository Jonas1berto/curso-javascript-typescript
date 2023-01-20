interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo = {
  nome: 'Jonas',
  sobrenome: 'Humberto',
  idade: 22,
};

const aluno2: PessoaProtocolo<number, string> = {
  nome: 59,
  sobrenome: 12,
  idade: 'minha idade',
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Junior',
  sobrenome: 'Melo',
  idade: 21,
};

console.log(aluno1, aluno2, aluno3);
