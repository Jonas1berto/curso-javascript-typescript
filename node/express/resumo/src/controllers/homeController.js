exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'Este será o título da página',
    numeros: [0, 1, 2, 3, 4, 5]
  })
  return
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST')
  return
}