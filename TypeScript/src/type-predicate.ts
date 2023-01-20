export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(value) && isNumber(sum)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma('a', 'b', 'c'));
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1]));
