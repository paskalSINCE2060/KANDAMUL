import React, { useContext, useState } from 'react';
import Broccoli from '../Assets/featuredProduct_Broccoli.jpg';
import Basil from '../Assets/Basil.jpg';
import Radish from '../Assets/Radish.jpg';
import SunflowerShoots from '../Assets/SunflowerShoots.jpg';
import PeaShoots from '../Assets/PeaShoots.jpg';
import BeetGreens from '../Assets/BeetGreens.jpg';
import MustardGreens from '../Assets/MustardGreens.jpg';
import Cilantro from '../Assets/Cilantro.jpg';
import {CartContext} from '../../Context/CartContext';
import './Micro.css';

const MicroG = () => {
     const { addToCart } = useContext(CartContext);
                  const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
                
                  const handleAddToCart = (item) => {
                    addToCart(item);
                    setCartMessage(true); // Show the message
                    setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
                  };
    return (
    <div>
<h1 className="MicroGreens_heading">Micro Greens</h1>
<div className="MicroGreens_categories">
    <div className="MicroGreens_category-card">
        <img src={Broccoli} alt="Broccoli"/>
        <h3>Broccoli</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Broccoli", price: 80 })}>
            Add to Cart
          </button>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={Basil} alt="Basil"/>
        <h3>Basil</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Basil", price: 80 })}>
            Add to Cart
          </button>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={Radish} alt="Radish"/>
        <h3>Radish</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Radish", price: 80 })}>
            Add to Cart
          </button>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={SunflowerShoots} alt="Sunflower Shoots"/>
        <h3>Sunflower Shoots</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Sunflower Shoots", price: 80 })}>
            Add to Cart
          </button>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={PeaShoots} alt="PeaShoots"/>
        <h3>Pea Shoots</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Pea Shoots", price: 80 })}>
            Add to Cart
          </button>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={BeetGreens} alt="Beet Greens"/>
        <h3>Beet Greens</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Spinach", price: 80 })}>
            Add to Cart
          </button>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={MustardGreens} alt="Mustard Greens"/>
        <h3>Mustard Greens</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Spinach", price: 80 })}>
            Add to Cart
          </button>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={Cilantro} alt="Cilantro"/>
        <h3>Cilantro</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Spinach", price: 80 })}>
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

export default MicroG;