import React, { useContext, useState } from 'react';
import Asparagus from '../Assets/Asparagus.jpg';
import Peas from '../Assets/Peas.jpg';
import Zucchini from '../Assets/Zucchini.jpg';
import Cucumbers from '../Assets/Cucumbers.jpg';
import Pumpkin from '../Assets/Pumpkin.jpg';
import ButternutSquash from '../Assets/ButternutSquash.jpg';
import Parsnips from '../Assets/Parsnips.jpg';
import Turnips from '../Assets/Turnips.jpg';
import {CartContext} from '../../Context/CartContext';

import './Seasonal.css';

const SeasonalVegetables = () => {
     const { addToCart } = useContext(CartContext);
                              const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
                            
                              const handleAddToCart = (item) => {
                                addToCart(item);
                                setCartMessage(true); // Show the message
                                setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
                              };
    return (
<div>
    <h1 className="SeasonalVegetables_heading">Seasonal Vegetables</h1>
    <div className="SeasonalVegetables_categories">
        <div className="SeasonalVegetables_category-card">
            <img src={Asparagus} alt="Asparagus"/>
            <h3>Asparagus(Spring)</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Asparagus", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Peas} alt="Peas"/>
            <h3>Peas(Spring)</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Peas", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Zucchini} alt="Zucchini"/>
            <h3>Zucchini(Summer)</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Zucchini", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Cucumbers} alt="Cucumbers"/>
            <h3>Cucumbers(Summer)</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Cucumbers", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Pumpkin} alt="Pumpkin"/>
            <h3>Pumpkin(Full Seasonal)</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Pumpkin", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={ButternutSquash} alt="ButternutSquash"/>
            <h3>Butternut(Full Seasonal)</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Butternut", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Parsnips} alt="Parsnips"/>
            <h3>Parsnips(Winter Seasonal)</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Parsnips", price: 80 })}>
            Add to Cart
          </button>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Turnips} alt="Turnips"/>
            <h3>Turnips(Winter Seasonal)</h3>
            <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Turnips", price: 80 })}>
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

export default SeasonalVegetables;