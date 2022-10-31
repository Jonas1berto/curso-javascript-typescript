import validator from "validator"

export default class Contato {
  constructor(infoClass) {
    this.informacao = document.querySelector(infoClass)
  }
  init() {
    this.events()
  }

  events() {
    if(!this.informacao) return
    this.informacao.addEventListener('submit', e => {
      e.preventDefault()
      this.validate(e)
    })
  }

  validate(e) {
    const el = e.target
    const inputNome = el.querySelector('input[name="nome"]')
    const inputEmail = el.querySelector('input[name="email"]')
    const inputTelefone = el.querySelector('input[name="telefone"]')

    let error = false
    if (!inputNome.value) {
      alert('Você precisa por o nome')
      error = true
    }
    if(!validator.isEmail(inputEmail.value)) {
      alert('Você precisa por um email válido')
      error = true
    }
    if(inputTelefone.value.length !== 9) {
      alert('Por favor, digite um numero válido, com 9 digitos.')
      error = true
    }
    if(!error) el.submit()
  }
}