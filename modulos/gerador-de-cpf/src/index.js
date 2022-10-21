// Importando o arquivo css/styles.css
// E como o index mandar la pro public/assets/js/bundle.js
// Ai o index.html pega o bundle e consegue acessar o arquivo css q ta sendo importado.

import GeraCPF from './modulos/GeraCPF.js'

import './assets/css/styles.css'

function imprimirCpf() {
  const gera = new GeraCPF()
  const cpfGerado = document.querySelector('.cpf-gerado')
  
  
  const btn = document.querySelector('.btn-cpf')
  btn.addEventListener('click',() => {
    cpfGerado.innerHTML = gera.geraNovoCpf()
  })
}
imprimirCpf()