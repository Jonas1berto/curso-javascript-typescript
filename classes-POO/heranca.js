class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }
  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} ligado`)
      return
    }
    this.ligado = true
  }
  desligado() {
    if (!this.ligado) {
      console.log(`${this.nome} desligado`)
      return
    }
    this.desligado = false
  }
}

// A classe Smartphone está herdando tudo da classe DispositivoEletronico.
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome)
    this.cor = cor
    this.modelo = modelo
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, preco, bateria) {
    super(nome)
    this.preco = preco
    this.bateria = bateria
  }
  ligar() {
    if (this.bateria >= 30) {
      console.log(`${this.nome} ligado com ${this.bateria} de bateria`)
      this.ligado = true
    } else {
      console.log(`${this.nome} está com a bateria fraca`)
    }
  }
}

const t1 = new Tablet('Tablet', 788.9, 20)
t1.ligar()
console.log(t1)

const celular1 = new Smartphone('Xiaomi', 'Preto', 'MI 9')
celular1.ligar()
console.log(celular1)
