// tipo-tuple
const dadosClientes1: readonly [number, string] = [1, 'Jonas'];
const dadosClientes2: [number, string, string] = [1, 'Jonas', 'Humberto'];
const dadosClientes3: [number, string, string?] = [1, 'Jonas'];
const dadosClientes4: [number, string, ...string[]] = [
  1,
  'Jonas',
  'Humberto',
  'Melo',
];

console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);

// readonly -> não pode ter o valor alterado.
// readonly array
const array1: readonly string[] = ['Jonas', 'Humberto'];
const array2: ReadonlyArray<string> = ['Jonas', 'Humberto'];

console.log(array1);
console.log(array2);
