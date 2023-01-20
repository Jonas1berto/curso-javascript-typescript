type ObterChavesFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChavesFn = (objeto, chave) => objeto[chave];

const animal = {
  tipo: 'cachorro',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 2,
};

const vacinas = obterChave(animal, 'vacinas');
const tipo = obterChave(animal, 'tipo');

console.log(tipo, vacinas, obterChave(animal, 'idade'));
