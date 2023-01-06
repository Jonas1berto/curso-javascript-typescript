export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida`);
    if (this.vida <= 0) {
      console.log(`${this.nome} foi derrotado!`);
    }
  }

  abstract bordao(): void;
}

export class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(`${this.emoji} ${this.nome} ao ataque`);
  }
}
export class Boss extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(`${this.emoji} ${this.nome} ao massacre`);
  }
}

const guerreiro = new Guerreiro('Guerreiro', 100, 1000);
const orc = new Boss('Orc', 93, 200);

guerreiro.atacar(orc);
orc.atacar(guerreiro);
guerreiro.atacar(orc);
guerreiro.atacar(orc);
