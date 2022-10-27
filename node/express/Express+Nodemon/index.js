const express = require('express')
const app = express()

//          Criar,  ler,  atualizar, apagar
// CRUD ->  Create, Read, Update,    Delete
//          Post,   Get,  Put,       Delete

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// Essa aula foi so pra saber como funcionar o nodemon, e deixar ele atualizando sozinho, sem precisar ficar parando o codigo e executando denovo.

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `)
})

app.post('/', (req, res) => {
  res.send('Recebi o Formulário')
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato comigo :)')
})

app.listen(3000, () => {
  console.log('Servidor executado na http://localhost:3000')
  console.log('Servidor rodando')
})
