import { Product } from "./product";

const createSut = (name: string, price: number): Product => {
  return new Product(name, price)
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have property name and price', () => {
    // System under test
    const sut = createSut('Celular', 2.459);
    expect(sut).toHaveProperty('name', 'Celular')
    expect(sut.price).toBeCloseTo(2.459)
  })
})
