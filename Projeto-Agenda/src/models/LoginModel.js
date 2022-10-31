const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
  constructor(body) {
    this.body = body
    this.errors = []
    this.user = null
  }

  async login() {
    this.valida()
    if(this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email })

    if(!this.user) {
    this.errors.push('Usuário não cadastrado.')
    return
    }

    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida')
      this.user = null
      return
    }
  }

  async register() {
    this.valida()
    if (this.errors.length > 0) return

    await this.userExists()
    if (this.errors.length > 0) return

    // Embaralhando a senha para salvar no banco de dados
    const salt = bcryptjs.genSaltSync()
    this.body.password = bcryptjs.hashSync(this.body.password, salt)

    // Registrando usuario no banco de dados mongoDB
    this.user = await LoginModel.create(this.body)
  }

  async userExists() {
    // Verificando se o email ja existe no banco de dados.
    this.user = await LoginModel.findOne({ email: this.body.email })
    if (this.user) this.errors.push('Usuário ja existe')
  }

  valida() {
    this.cleanUp()
    // Validação
    // O e-mail precisa ser válido
    if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
    // A senha precisa ter entre 5 e 50 caracteres
    if (this.body.password.length <= 5 || this.body.password.length >= 50) {
      this.errors.push(
        'A senha precisa ser maior que 5 e menor que 50 caracteres'
      )
    }
  }

  cleanUp() {
    // Garantindo que os campos do formulario sejam STRINGS
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = ''
      }
    }
    // Garantindo q so ta pegando os campos EMAIL e o campo PASSWORD
    this.body = {
      email: this.body.email,
      password: this.body.password
    }
  }
}

module.exports = Login
