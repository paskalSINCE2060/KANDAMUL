import React, { useContext, useState } from 'react';	
import BitterMelon from '../Assets/BitterMelon.jpg';
import Romanesco from '../Assets/Romanesco.jpg';
import Kohlrabi from '../Assets/Kohlrabi.jpg';
import Mint from '../Assets/Mint.jpg';
import PurpleYam from '../Assets/PurpleYam.jpg';
import Chayote from '../Assets/Chayote.jpg';
import YardlongBean from '../Assets/YardlongBean.jpg';
import Fennel from '../Assets/Fennel.jpg';
import './Exotic.css';
import {CartContext} from '../../Context/CartContext';

const Exotic = ()=>{
      const { addToCart } = useContext(CartContext);
      const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
    
      const handleAddToCart = (item) => {
        addToCart(item);
        setCartMessage(true); // Show the message
        setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
      };
    return (
<div>
    <h1 className="Exotic_heading">Exotic Vegetables</h1>
    <div className="Exotic_categories">
        <div className="Exotic_category-card">
            <img src={BitterMelon} alt="Bitter Melon"/>
            <h3>Bitter Melon</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Bitter Melon", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Romanesco} alt="Romanesco"/>
            <h3>Romanesco</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Romanesco", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Kohlrabi} alt="Kohlrabi"/>
            <h3>Kohlrabi</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Kohlrabi", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Mint} alt="Mint"/>
            <h3>Mint</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Mint", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="Exotic_category-card">
            <img src={PurpleYam} alt="Purple Yam"/>
            <h3>Purple Yam</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Purple Yam", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Chayote} alt="Chayote"/>
            <h3>Chayote</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Chayote", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="Exotic_category-card">
            <img src={YardlongBean} alt="Yardlong Bean"/>
            <h3>Yardlong Bean</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Yardlong Bean", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Fennel} alt="Fennel"/>
            <h3>Fennel</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Fennel", price: 80 })}>
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

    )
}

export default Exotic;