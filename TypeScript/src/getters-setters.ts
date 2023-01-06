export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    // Removendo os sinais do cpf.
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa1 = new Pessoa('Jonas', 'Humberto', 22, '123.456.789-00');
// Utiliza o set quandoo utilizamos o "=".
pessoa1.cpf = '123.456.789-99';
// Utiliza o get quando chamamos o metodo.
console.log(pessoa1.cpf);
