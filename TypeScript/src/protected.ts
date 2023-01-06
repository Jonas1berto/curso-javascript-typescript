export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    // sobrescrevento elemento com super
    super('Udemy', '00.0000.00-00');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public idade: number,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Jonas', 'Humberto', 22);
empresa1.adicionaColaborador(colaborador1);
empresa1.mostraColaborador();
const colaboradorRemovido = empresa1.popColaborador();
console.log(empresa1);
console.log(colaboradorRemovido);
