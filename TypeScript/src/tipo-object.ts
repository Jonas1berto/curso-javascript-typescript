const objetoA: {
  // readonly -> Não deixa o valor ser alterado
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

console.log((objetoA.chaveB = 'Outro valor'));
