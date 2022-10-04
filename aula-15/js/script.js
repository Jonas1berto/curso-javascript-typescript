function meuEscopo () {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  let pessoas = []

  function recebeEventoForm (e) {
    e.preventDefault()

    const nome = document.querySelector('.nome').value
    const sobrenome = document.querySelector('.sobrenome').value
    const altura = document.querySelector('.altura').value
    const peso = document.querySelector('.peso').value

    resultado.innerHTML += `<p>O nome é:${nome} ${sobrenome} com a altura de:${altura} e o peso:${peso}<br/></p>`
    
    pessoas.push({
      nome: nome,
      sobrenome: sobrenome,
      altura: altura,
      peso: peso
    })
    console.log(pessoas)
  }
  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()