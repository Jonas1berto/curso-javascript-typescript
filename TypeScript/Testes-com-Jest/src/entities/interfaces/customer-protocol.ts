export interface CustomerOrder {
  getName(): string;
  getIDN(): string
}

export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomer {
  name: string;
  cnpj: string;
}
