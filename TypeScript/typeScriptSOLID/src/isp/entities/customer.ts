import { CustomerOrder, CustomerProtocol, EnterpriseCustomer } from "./interfaces/customer-protocol";

export class IndividualCustomer implements CustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  getIDN(): string {
    return this.cpf
  }
}
export class Enterprise implements EnterpriseCustomer, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj
  }

  getName(): string {
    return this.name
  }

  getIDN(): string {
    return this.cnpj
  }
}

const pessoa = new IndividualCustomer('Jonas', 'Humberto', '123.123.123-00')
console.log(pessoa.getName())
console.log(pessoa.getIDN())

const empresa = new Enterprise('Empresa1', '4567888')
console.log(empresa.getName())
console.log(empresa.getIDN())
