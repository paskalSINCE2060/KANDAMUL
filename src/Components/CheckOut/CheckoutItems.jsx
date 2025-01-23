import React from "react";
import { useNavigate } from "react-router-dom";
import './CheckoutItems.css';

const CheckoutItems = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  function placeOrder(event) {
    event.preventDefault(); // Prevent form submission
    alert('Your order has been placed successfully!');
    navigate('/'); // Redirect to the Vegetables page
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <form className="checkout-form" onSubmit={placeOrder}>
        <div className="form-group">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            className="form-input"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="payment-method">Payment Method:</label>
          <select
            id="payment-method"
            name="payment-method"
            className="form-input"
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="card-details">Card Details (if applicable):</label>
          <input
            type="text"
            id="card-details"
            name="card-details"
            className="form-input"
            placeholder="Card Number"
          />
        </div>
        <button type="submit" className="checkout-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutItems;
