type Constructor = {
  new (...args: any[]): any;
};

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('');
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o 2 decorador' + param1);
    return target;
  };
}

@outroDecorador(' Sou o param1')
@inverteNomeECor('Outra coisa', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}
const animal = new Animal('Cachorro', 'preto');
console.log(animal);
