// tipo-never -> Nunca vai retornar nada.

export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
