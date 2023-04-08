import { IndividualCustomer, Enterprise } from "./customer";

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(lastName, firstName, cpf)
}

const createEnterprise = (name: string, cnpj: string): Enterprise => {
  return new Enterprise(name, cnpj)
}

afterEach(() => jest.clearAllMocks())

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Jonas', 'Humberto', '000.000.000-00');
    expect(sut).toHaveProperty('firstName', 'Jonas')
    expect(sut).toHaveProperty('lastName', 'Humberto')
    expect(sut).toHaveProperty('cpf', '000.000.000-00')
  })

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Jonas', 'Humberto', '000.000.000-00');
    expect(sut.getName).toBe('Jonas Humberto')
    expect(sut.getIDN).toBe('000.000.000-00')
  })
})

describe('Enterprise', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterprise('Market', '000.000');
    expect(sut).toHaveProperty('name', 'Market')
    expect(sut).toHaveProperty('cnpj', '000.000')
  })

  it('should have methods to get name and idn', () => {
    const sut = createEnterprise('Market','000.000');
    expect(sut.getName).toBe('Market')
    expect(sut.getIDN).toBe('000.000')
  })
})
