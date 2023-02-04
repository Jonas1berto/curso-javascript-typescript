/**
 * Módulos de alto nivel não devem depender de módulos de baixo nivel, Ambos devem depender de abstrações.
 * Dependa de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes, detalhes devem depender de abstrações.
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível
 */
import { Messaging } from "./services/messaging"
import { Order } from "./entities/order"
import { Persistency } from "./services/persistency"
import { Product } from "./entities/product"
import { ShoppingCart } from "./entities/shopping-cart"
import { FiftyPercentDiscount, TenPercentDiscount } from "./entities/discount"
import { Enterprise } from "./entities/customer"
import { MessagingProtocol } from "./entities/interfaces/messaging-protocol"

// const fiftyPercentDiscount = new FiftyPercentDiscount()
const tenPercentDiscount = new TenPercentDiscount()
const shoppingCart = new ShoppingCart(tenPercentDiscount)
const messaging = new Messaging()
const persistency = new Persistency()

const enterpriseCustomer = new Enterprise(
  'Empresa grande',
  '00000000000',
)

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK')
  }
}

const messagingMock = new MessagingMock()

const order = new Order(shoppingCart, messagingMock, persistency, enterpriseCustomer)

shoppingCart.addProduct(new Product( 'Computador', 2541.99))
shoppingCart.addProduct(new Product('Notebook', 3500.49))
shoppingCart.addProduct(new Product('Mouse', 64.49))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
order.checkout()
console.log(order.orderStatus)
