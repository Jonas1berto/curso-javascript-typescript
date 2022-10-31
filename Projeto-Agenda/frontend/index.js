import 'core-js/stable'
import 'regenerator-runtime/runtime'

// import './assets/css/style.css'

// Validando campo usuario com front-end
import Login from './modules/Login'
const cadastro = new Login('.form-cadastro')
cadastro.init()
const login = new Login('.form-login')
login.init()

// Validando campo Cadastrar usuario com front-end
import Contato from './modules/Contato'
const contato = new Contato('.contato')
contato.init()