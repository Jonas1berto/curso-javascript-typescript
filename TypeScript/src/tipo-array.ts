// Tem 2 maneiras de criar arrays em ts
// Arrays<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(2, 2, 2);
const concatena = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatena);
console.log(upper);
