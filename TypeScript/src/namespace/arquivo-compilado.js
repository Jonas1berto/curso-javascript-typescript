// eslint-disable-next-line @typescript-eslint/no-namespace
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Jonas';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace(MeuNamespace.nomeDoNamespace);
    console.log(pessoaDoNamespace);
    // eslint-disable-next-line @typescript-eslint/no-namespace
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Humberto';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Junior');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
