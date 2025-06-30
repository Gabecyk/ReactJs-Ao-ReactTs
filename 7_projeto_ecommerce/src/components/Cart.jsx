import React from 'react'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'

function Cart({ cartItems, onUpdateCart, onRemoveFromCart, setCartItems }) {

  const totalPrice = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price) * parseFloat(item.quantity)
  }, 0)

  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (<p>Sem items!</p>) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart}/>
          ))}
          <div className="total">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <CheckoutButton cartItems={cartItems} setCartItems={setCartItems}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart