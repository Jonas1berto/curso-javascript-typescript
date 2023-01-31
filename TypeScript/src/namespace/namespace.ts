// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MeuNamespace {
  export const nomeDoNamespace = 'Jonas';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace(nomeDoNamespace);
  console.log(pessoaDoNamespace);

  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Humberto';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Junior');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
