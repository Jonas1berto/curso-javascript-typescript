// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

// Função normal
function ePaisagem(largura, altura) {
  if (largura > altura) {
    return `A foto está modo paisagem`
  } else {
    return `A foto não está no modo paisagem`
  }
}

console.log(ePaisagem(1920, 1080))

console.log('------------')
// Arrow function

const photoPaisagem = (larg, alt) => {
  if (larg > alt) {
    return 'Éstá imagem está no modo paisagem'
  } else {
    return 'Está imagem não é está no modo paisagem'
  }
}

console.log(photoPaisagem(1840, 890))
