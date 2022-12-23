// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!) -> objeto não pode ser nulo
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'yellow';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();
