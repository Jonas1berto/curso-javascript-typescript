import { CartItem } from "./cart-item"

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addProduct(product: CartItem): void;
  removeProduct(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
