const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(req.query.facebookprofile)
})

app.post('/', (req, res) => {
  res.send(`O que você me enviou ofi: ${req.body.nome}`)
})

app.listen(3000, () => {
  console.log('Servidor executado na http://localhost:3000')
  console.log('Servidor rodando')
})
