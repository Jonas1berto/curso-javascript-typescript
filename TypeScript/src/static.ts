export class Pessoa {
  // Atributos staticos
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, ',', Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Jonas', 'Humberto', 22, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Junior', 'Gomes');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
