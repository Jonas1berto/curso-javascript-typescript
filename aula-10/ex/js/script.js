const numero = Number(prompt('Digite um numero:'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML += `<p> Raiz quadrada de ${numero} é: ${numero ** 0.5} </p>`
texto.innerHTML += `<p> O numero:${numero} é um inteiro ? ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p> É um numero NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p> Arredodando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p> Arredodando para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p> Com duas casa decimais: ${numero.toFixed(2)}</p>`