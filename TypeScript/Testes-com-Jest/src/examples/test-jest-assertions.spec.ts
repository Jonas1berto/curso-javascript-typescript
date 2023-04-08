describe('Valores primitivos', () => {
  it('should test jest assertions', () => {
    const number = 10

    expect(number).toBe(10)
    expect(number).toEqual(10)

    expect(number).not.toBeFalsy()
    expect(number).toBeTruthy()

    expect(number).toBeGreaterThan(9)
    expect(number).toBeGreaterThanOrEqual(10)
    expect(number).toBeLessThan(11)
    expect(number).toBeLessThanOrEqual(10)

    expect(number).toBeCloseTo(10.005)

    expect(number).not.toBeNull()

    expect(number).toHaveProperty('toString')
  })
})

describe('Objects', () => {
  it('should test jest assertions with object', () => {
    const person = {name: 'Jonas', age: 22}
    const secondPerson = {...person}

    expect(person).toEqual(secondPerson);
    expect(person).toHaveProperty('age')
    expect(person).not.toHaveProperty('lastName')
    expect(person).toHaveProperty('age', 23)

    expect(person.name).toBe('Jonas')
  })
})
