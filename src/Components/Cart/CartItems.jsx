import React, { useContext } from 'react'
import './CartItems.css';
import {CartContext} from '../../Context/CartContext';
const CartItems = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (name, quantity) => {
    if (quantity >= 1) {
      updateQuantity(name, quantity);
    }
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="cart-quantity"
                      onChange={(e) => handleQuantityChange(item.name, e.target.value)}
                    />
                  </td>
                  <td>Rs.{item.price}</td>
                  <td>Rs.{item.price * item.quantity}</td>
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p className="cart-total">Total: Rs.{calculateTotal()}</p>
            <button className="checkout-button">
              <a href="checkout" className="checkout-link">
                Proceed to Checkout
              </a>
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}

export default CartItems
