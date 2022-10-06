function createElement() {
  const resultado = document.querySelector('.container')
  const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
  ]

  let tagText = ''

  for (i = 0; i < elementos.length; i++) {
    //   desestruturando o objeto
    let { tag, texto } = elementos[i]
    tagText += `<${tag}>${texto}</${tag}>`
  }
  resultado.innerHTML += `<div>${tagText}</div>`
}

createElement()
