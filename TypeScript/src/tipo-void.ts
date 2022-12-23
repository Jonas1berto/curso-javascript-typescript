function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Junior',
  sobrenome: 'Melo',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Jonas', 'Humberto');
pessoa.exibirNome();

export { pessoa };
