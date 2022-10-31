require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.emit('pronto')
  })
  .catch(e => console.log(e))
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')


app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'pode colocar qualquer coisa',
  // store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // tempo q vai durar o cookie(7dias)
    httpOnly: true
  },
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING })
})
app.use(sessionOptions)
app.use(flash())

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(csrf())

// Nossos próprios middlewares
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Servidor executado na http://localhost:3000')
    console.log('Servidor rodando')
  })
})
