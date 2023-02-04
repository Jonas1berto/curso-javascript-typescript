/**
 * Open/closed principle ocp
 * Entidades devem estar abertas para extensão, mas fechadas para modificações.
 */
import { Messaging } from "./services/messaging"
import { Order } from "./entities/order"
import { Persistency } from "./services/persistency"
import { Product } from "./entities/product"
import { ShoppingCart } from "./entities/shopping-cart"
import { FiftyPercentDiscount, TenPercentDiscount } from "./entities/discount"

// const fiftyPercentDiscount = new FiftyPercentDiscount()
const tenPercentDiscount = new TenPercentDiscount()
const shoppingCart = new ShoppingCart(tenPercentDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)
shoppingCart.addProduct(new Product( 'Computador', 2541.99))
shoppingCart.addProduct(new Product('Notebook', 3500.49))
shoppingCart.addProduct(new Product('Mouse', 64.49))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
order.checkout()
console.log(order.orderStatus)
