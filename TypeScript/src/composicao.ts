export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  freiar(): void {
    this.motor.freiar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  freiar(): void {
    console.log('Motor está parando');
  }

  desligar(): void {
    console.log('Motor está desligado.');
  }
}

const carro1 = new Carro();
carro1.ligar();
carro1.acelerar();
carro1.freiar();
carro1.desligar();
