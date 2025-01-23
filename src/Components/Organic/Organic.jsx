import React, { useContext, useState } from 'react';
import Tomatoes from '../Assets/Tomatoes.jpg';
import Broccoli from '../Assets/featuredProduct_Broccoli.jpg';
import Spinach from '../Assets/spinach.jpg';
import Cauliflower from '../Assets/Cauliflower.jpg';
import Eggplant from '../Assets/Eggplant.jpg';
import Celery from '../Assets/Celery.jpg';
import Onions from '../Assets/Onions.jpg';
import Mushrooms from '../Assets/Mushrooms.jpg';
import {CartContext} from '../../Context/CartContext';

import './Organic.css';
const Organic = () => {
    const { addToCart } = useContext(CartContext);
                      const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
                    
                      const handleAddToCart = (item) => {
                        addToCart(item);
                        setCartMessage(true); // Show the message
                        setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
                      };
    return (
        <div>
        <h1 className="OrganicProduce_heading">Organic Produce</h1>
        <div className="OrganicProduce_categories">
            <div className="OrganicProduce_category-card">
                <img src={Tomatoes} alt="Tomatoes"/>
                <h3>Tomatoes</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Tomatoes", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Broccoli} alt="Broccoli"/>
                <h3>Broccoli</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Broccoli", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Spinach} alt="Beets (Spinach)"/>
                <h3>Spinach</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Spinach", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Cauliflower} alt="Cauliflower"/>
                <h3>Cauliflower</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Cauliflower", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Eggplant} alt="Eggplant"/>
                <h3>Eggplant</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Eggplant", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Celery} alt="Celery"/>
                <h3>Celery</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Celery", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Onions} alt="Onions"/>
                <h3>Onions</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Onions", price: 80 })}>
            Add to Cart
          </button>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Mushrooms} alt="Mushrooms"/>
                <h3>Mushrooms</h3>
                <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Mushrooms", price: 80 })}>
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

export default Organic;