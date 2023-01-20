// Record
const objeto1: Record<string, string | number> = {
  nome: 'Jonas',
  sobrenome: 'Humberto',
  idade: 22,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
// Transforma tudo para requerido
type PessoaRequired = Required<PessoaProtocol>;

// Partial
// Transforma tudo para opcional
type PessoaPartial = Partial<PessoaRequired>;

// Readonly
// Transforma tudo em readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick
// Consegue selecionar oq quer
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Jose',
  sobrenome: 'Gomes',
  idade: 32,
};
console.log(objeto2);

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// Exclude
// O exclude so pega os q não se repete
type TipoExclude = Exclude<ABC, CDE>;

// Extract
// O extract pega os que se repete
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  sobrenome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'hsjahsajsh54asa',
  nome: 'Jonas',
  sobrenome: 'Humberto',
  idade: 22,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default 1;
