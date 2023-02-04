import { CartItem } from "./interfaces/cart-item"

export class ShoppingCart {
  private readonly _cartProducts: CartItem[] = []

  addProduct(product: CartItem): void {
    this._cartProducts.push(product)
  }

  removeProduct(index: number): void {
    this._cartProducts.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._cartProducts
  }

  total(): number {
    return Number(this._cartProducts.reduce((total, next) => total + next.price,0).toFixed(2))
  }

  isEmpty(): boolean {
    return this._cartProducts.length === 0
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...')
    this._cartProducts.length = 0
  }
}
