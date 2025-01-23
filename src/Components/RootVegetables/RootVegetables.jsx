import React, { useContext, useState } from 'react';
import Carrot from '../Assets/featuredProduct_carrot.jpg';
import Potatoes from '../Assets/Potatoes.jpg';
import Beets from '../Assets/Beets.jpg';
import Turnips from '../Assets/Turnips.jpg';
import Radishes from '../Assets/Radishes.jpg';
import Parsnips from '../Assets/Parsnips.jpg';
import Rutabagas from '../Assets/Rutabagas.jpg';
import Yams from '../Assets/Yams.jpg';
import './RootVegetable.css';
import {CartContext} from '../../Context/CartContext';


const RootVegetable = () => {
     const { addToCart } = useContext(CartContext);
                          const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
                        
                          const handleAddToCart = (item) => {
                            addToCart(item);
                            setCartMessage(true); // Show the message
                            setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
                          };
    return (
        <div>
            <h1 className="RootVegetable_heading">Root Vegetables</h1>
            <div className="RootVegetable_categories">
                <div className="RootVegetable_category-card">
                    <img src={Carrot} alt="Carrot"/>
                    <h3>Carrot</h3>
                    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Carrot", price: 80 })}>
            Add to Cart
          </button>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Potatoes} alt="Potatoes"/>
                    <h3>Potatoes</h3>
                    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Potatoes", price: 80 })}>
            Add to Cart
          </button>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Beets} alt="Beets (Beetroot)"/>
                    <h3>Beets (Beetroot)</h3>
                    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Beets", price: 80 })}>
            Add to Cart
          </button>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Turnips} alt="Turnips"/>
                    <h3>Turnips</h3>
                    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Turnips", price: 80 })}>
            Add to Cart
          </button>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Radishes} alt="Radishes"/>
                    <h3>Radishes</h3>
                    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Radishes", price: 80 })}>
            Add to Cart
          </button>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Parsnips} alt="Parsnips"/>
                    <h3>Parsnips</h3>
                    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Parsnips", price: 80 })}>
            Add to Cart
          </button>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Rutabagas} alt="Rutabagas"/>
                    <h3>Rutabagas</h3>
                    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Rutabagas", price: 80 })}>
            Add to Cart
          </button>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Yams} alt="Yams"/>
                    <h3>Yams</h3>
                    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Yams", price: 80 })}>
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

export default RootVegetable;
