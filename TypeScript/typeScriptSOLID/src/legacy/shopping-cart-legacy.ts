type products = { name: string; price: number}
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
  private readonly _cartProducts: products[] = []
  private _orderStatus: OrderStatus = 'open'

  addProduct(product: products): void {
    this._cartProducts.push(product)
  }

  removeProduct(index: number): void {
    this._cartProducts.splice(index, 1)
  }

  get items(): Readonly<products[]> {
    return this._cartProducts
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  total(): number {
    return Number(this._cartProducts.reduce((total, next) => total + next.price,0).toFixed(2))
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio')
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com o total de: ${this.total()} foi recebido!`)
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._cartProducts.length === 0
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg)
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso')
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...')
    this._cartProducts.length = 0
  }
}

const carrinhoDeCompras = new ShoppingCartLegacy()
carrinhoDeCompras.addProduct({name: 'Computador', price: 2541.99})
carrinhoDeCompras.addProduct({name: 'Notebook', price: 3500.49})
carrinhoDeCompras.addProduct({name: 'Mouse', price: 64.49})

console.log(carrinhoDeCompras.items)
console.log(carrinhoDeCompras.total())
carrinhoDeCompras.checkout()
console.log(carrinhoDeCompras.orderStatus)
carrinhoDeCompras.checkout()
