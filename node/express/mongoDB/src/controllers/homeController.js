const HomeModel = require('../models/HomeModel')

HomeModel.create({
  titulo: 'Outro titulo teste',
  descricao: 'Outra descrição de teste.'
}).then(dados => {
  console.log(dados)
}).catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
  res.render('index')
  return
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST')
  return
}
