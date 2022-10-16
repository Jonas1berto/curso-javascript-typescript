// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente, confira seu saldo: R$${this.saldo}`)
    return
  }

  this.saldo -= valor
  this.verSaldo()
}
Conta.prototype.depositar = function (valor) {
  this.saldo += valor
  this.verSaldo()
}
Conta.prototype.verSaldo = function () {
  console.log(
    `Agencia:${this.agencia}/${this.conta}, seu saldo é: R$${this.saldo.toFixed(
      2
    )}`
  )
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(
      `Saldo insuficiente: ${this.saldo}, e o seu limite é de: R$${this.limite}`
    )
    return
  }
  this.saldo -= valor
  this.verSaldo()
}
const contaCorrente = new ContaCorrente(22, 44, 0, 100)
contaCorrente.sacar(100)
contaCorrente.depositar(10)
contaCorrente.sacar(50)
console.log()

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const contaPoupanca = new ContaPoupanca(33, 55, 0)
contaPoupanca.depositar(50)
contaPoupanca.sacar(10)
contaPoupanca.sacar(60)
