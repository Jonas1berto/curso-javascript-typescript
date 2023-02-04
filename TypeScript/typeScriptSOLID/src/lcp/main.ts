/**
 * Liskov substitution principle (Princípio da substituição de Liskov) - Se o(x) é uma propriedade demostrável dos objetos x de tipo T. Então o(y) deve ser verdadeiro para objetos y de tippo S onde S é um subtipo de T.
 *
 * Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
 * Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
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
