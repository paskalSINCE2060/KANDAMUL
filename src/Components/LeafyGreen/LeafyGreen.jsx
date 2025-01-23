import React, { useContext, useState } from 'react';
import Spinach from '../Assets/spinach.jpg';
import Lettuce from '../Assets/Lettuce.jpg';
import SwissChard from '../Assets/swisschard.jpg';
import CollardGreens from '../Assets/CollardGreens.jpg';
import MustardGreens from '../Assets/MustardGreens.jpg';
import Watercress from '../Assets/Watercress.jpg';
import TurnipGreens from '../Assets/TurnipGreens.jpg';
import DandelionGreens from '../Assets/DandelionGreens.jpg';
import {CartContext} from '../../Context/CartContext';

import './LeafyGreen.css';

const LeafyGreen = () => {
     const { addToCart } = useContext(CartContext);
              const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
            
              const handleAddToCart = (item) => {
                addToCart(item);
                setCartMessage(true); // Show the message
                setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
              };
    return (
        <div>
            <h1 className="LeafyGreen_heading">Leafy Greens</h1>
    <div className="LeafyGreen_categories">
      <div className="LeafyGreen_category-card">
        <img src={Spinach} alt="Spinach"/>
        <h3>Spinach</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Spinach", price: 80 })}>
            Add to Cart
          </button>
      </div>
      
      
      <div className="LeafyGreen_category-card">
        <img src={Lettuce} alt="Lettuce"/>
        <h3>Lettuce</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Lettuce", price: 80 })}>
            Add to Cart
          </button>
      </div>
      
      
      <div className="LeafyGreen_category-card">
        <img src={SwissChard} alt="Swiss Chard"/>
        <h3>Swiss Chard</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Swiss Chard", price: 80 })}>
            Add to Cart
          </button>
      </div>
      
     
      <div className="LeafyGreen_category-card">
        <img src={CollardGreens} alt="Collard Greens"/>
        <h3>Collard Greens</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Collard Greens", price: 80 })}>
            Add to Cart
          </button>
      </div>
      
    
      <div className="LeafyGreen_category-card">
        <img src={MustardGreens} alt="Mustard Greens"/>
        <h3>Mustard Greens</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Mustard Greens", price: 80 })}>
            Add to Cart
          </button>
      </div>

      <div className="LeafyGreen_category-card">
        <img src={Watercress} alt="Watercress"/>
        <h3>Watercress</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Watercress", price: 80 })}>
            Add to Cart
          </button>
      </div>

      <div className="LeafyGreen_category-card">
        <img src={TurnipGreens} alt="Turnip Greens"/>
        <h3>Turnip Greens</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Turnip Greens", price: 80 })}>
            Add to Cart
          </button>
      </div>

      <div className="LeafyGreen_category-card">
        <img src={DandelionGreens} alt="DandelionGreens"/>
        <h3>Dandelion Greens</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Dandelion Greens", price: 80 })}>
            Add to Cart
          </button>
      </div>
    </div>
    {cartMessage && (
        <div className="cart-message">
          <p>Added to Cart</p>
        </div>
      )}
    </div>

    );
}

export default LeafyGreen;