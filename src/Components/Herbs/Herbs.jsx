import React, { useContext, useState } from 'react';
import Cilantro from '../Assets/Cilantro.jpg';
import Parsley from '../Assets/Parsley.jpg';
import Basil from '../Assets/Basil.jpg';
import Mint from '../Assets/Mint.jpg';
import ChiliPeppers from '../Assets/ChiliPeppers.jpg';
import Garlic from '../Assets/Garlic.jpg';
import Ginger from '../Assets/Ginger.jpg';
import Turmeric from '../Assets/Turmeric.jpg';
import './Herbs.css';
import {CartContext} from '../../Context/CartContext';

const Herbs = () => {
        const { addToCart } = useContext(CartContext);
            const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
          
            const handleAddToCart = (item) => {
              addToCart(item);
              setCartMessage(true); // Show the message
              setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
            };
    return (
        <div>
        <h1 className="Herbs_heading">Herbs&Spices</h1>
        <div className="Herbs_categories">
            <div className="Herbs_category-card">
                <img src={Cilantro} alt="Cilantro"/>
                <h3>Cilantro</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Cilantro", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Parsley} alt="Parsley"/>
                <h3>Parsley</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Parsley", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Basil} alt="Basil"/>
                <h3>Basil</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Basil", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Mint} alt="Mint"/>
                <h3>Mint</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Mint", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="Herbs_category-card">
                <img src={ChiliPeppers} alt="Chili Peppers"/>
                <h3>Chili Peppers</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Chili Peppers", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Garlic} alt="Garlic"/>
                <h3>Garlic</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Garlic", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Ginger} alt="Ginger"/>
                <h3>Ginger</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Ginger", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Turmeric} alt="Turmeric"/>
                <h3>Turmeric</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Turmeric", price: 80 })}>
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

export default Herbs;
