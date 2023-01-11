export class Calculadora {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }
  sub(n: number): this {
    this.number -= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }
  mult(n: number): this {
    this.number *= n;
    return this;
  }
}

class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(20);
calculadora.add(5).mult(2).div(4).sub(2.5).pow(2);
console.log(calculadora);

// Builder - Padrão de projeto da GOF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); // Builder
request.setUrl('https://www.google.com').setMethod('post').send();
