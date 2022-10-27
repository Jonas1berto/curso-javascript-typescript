const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(meuMiddleware)
app.use(routes)

app.listen(3000, () => {
  console.log('Servidor executado na http://localhost:3000')
  console.log('Servidor rodando')
})
