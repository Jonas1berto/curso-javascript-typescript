export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostraColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public idade: number,
  ) {}
}

const empresa1 = new Empresa('Udemy', '15.5554.');
const colaborador1 = new Colaborador('Jonas', 'Humberto', 22);
empresa1.adicionaColaborador(colaborador1);
empresa1.mostraColaborador();
