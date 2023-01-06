export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    // superclass
    const result = super.getNomeCompleto();
    return result + ' ELEMENTO ADC';
  }
}
export class Cliente extends Pessoa {}

const aluno = new Aluno('Jonas', 'Humberto', 22, '0000');
const cliente = new Cliente('Jonas', 'Humberto', 22, '0000');
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
