import React, { useContext, useState } from 'react';
import './Gourmet.css';
import Artichokes from '../Assets/Artichokes.jpg';
import WhiteAsparagus from '../Assets/WhiteAsparagus.jpg';
import TruffleMushrooms from '../Assets/TruffleMushrooms.jpg';
import BabyCarrots from '../Assets/BabyCarrots.jpg';
import HeirloomTomatoes from '../Assets/HeirloomTomatoes.jpg';
import RomanescoBroccoli from '../Assets/RomanescoBroccoli.jpg';
import Shallots from '../Assets/Shallots.jpg';
import FiddleheadFerns from '../Assets/FiddleheadFerns.jpg'
import {CartContext} from '../../Context/CartContext';

const Gourmet = () => {
     const { addToCart } = useContext(CartContext);
        const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
      
        const handleAddToCart = (item) => {
          addToCart(item);
          setCartMessage(true); // Show the message
          setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
        };
    return (
    <div>
        <h1 className="GourmetVegetables_heading">Gourmet Vegetables</h1>
        <div class="GourmetVegetables_categories">
        <div class="GourmetVegetables_category-card">
        <img src={Artichokes} alt="Artichokes"/>
        <h3>Artichokes</h3>
        <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Artichokes", price: 80 })}>
            Add to Cart
          </button>
    </div>
  
  
  <div className="GourmetVegetables_category-card">
    <img src={WhiteAsparagus} alt="WhiteAsparagus"/>
    <h3>WhiteAsparagus</h3>
    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "WhiteAsparagus", price: 80 })}>
            Add to Cart
          </button>
  </div>
  
  
  <div className="GourmetVegetables_category-card">
    <img src={TruffleMushrooms} alt="Truffle Mushrooms"/>
    <h3>Truffle Mushrooms</h3>
    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Truffle Mushrooms", price: 80 })}>
            Add to Cart
          </button>
  </div>
  
 
  <div className="GourmetVegetables_category-card">
    <img src={BabyCarrots} alt="Baby Carrots"/>
    <h3>Baby Carrots</h3>
    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Baby Carrots", price: 80 })}>
            Add to Cart
          </button>
  </div>
  

  <div className="GourmetVegetables_category-card">
    <img src={HeirloomTomatoes} alt="Heirloom Tomatoes"/>
    <h3>Heirloom Tomatoes</h3>
    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Heirloom Tomatoes", price: 80 })}>
            Add to Cart
          </button>
  </div>

  <div className="GourmetVegetables_category-card">
    <img src={RomanescoBroccoli} alt="Romanesco Broccoli"/>
    <h3>Romanesco Broccoli</h3>
    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Romanesco Broccoli", price: 80 })}>
            Add to Cart
          </button>
  </div>

  <div className="GourmetVegetables_category-card">
    <img src={Shallots} alt="Shallots"/>
    <h3>Shallots</h3>
    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Shallots", price: 80 })}>
            Add to Cart
          </button>
  </div>

  <div className="GourmetVegetables_category-card">
    <img src={FiddleheadFerns} alt="FiddleheadFerns"/>
    <h3>Fiddlehead Ferns</h3>
    <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Fiddlehead Ferns", price: 80 })}>
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

export default Gourmet;