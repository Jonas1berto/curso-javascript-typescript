type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj: CoresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('azul', coresObj));
console.log(traduzirCor('verde', coresObj));
