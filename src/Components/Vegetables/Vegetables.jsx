import React, { useContext, useState } from "react";
import Image7 from '../../../src/Components/Assets/beetroot.png';
import Image8 from '../../../src/Components/Assets/Garlic.png';
import Image9 from '../../../src/Components/Assets/Pumpkin.png';
import Image10 from '../../../src/Components/Assets/Zucchini.png';
import Image11 from '../../../src/Components/Assets/Radish.png';
import Image12 from '../../../src/Components/Assets/BellPepper.png';
import Image13 from '../../../src/Components/Assets/Okra.png';
import Image14 from '../../../src/Components/Assets/Peas.png';
import Image15 from '../../../src/Components/Assets/Lettuce.png';
import Image16 from '../../../src/Components/Assets/Asparagus.png';
import leafyGreen from "../Assets/leafy_green.jpg";
import rootVegetable from "../Assets/rootVegetable.jpg";
import organicProduce from "../Assets/organicProduce.jpg";
import featuredProductCarrot from "../Assets/featuredProduct_carrot.jpg";
import herbSpices from "../Assets/herbsspices.jpg";
import exoticvegetables from "../Assets/exoticvegetables.jpg";
import featuredProductCabbage from "../Assets/featuredProduct_cabbage.jpg";
import featuredProductBroccoli from "../Assets/featuredProduct_Broccoli.jpg";
import {CartContext} from '../../Context/CartContext';
import './Vegetables.css';

const Vegetables = () => {

       const { addToCart } = useContext(CartContext);
                    const [cartMessage, setCartMessage] = useState(false); // State to manage the cart message
                  
                    const handleAddToCart = (item) => {
                      addToCart(item);
                      setCartMessage(true); // Show the message
                      setTimeout(() => setCartMessage(false), 3000); // Hide the message after 3 seconds
                    };


  const boxes2 = [
    { img: Image7, desc: "Beetroot" },
    { img: Image8, desc: "Garlic" },
    { img: Image9, desc: "Pumpkin" },
    { img: Image10, desc: "Zucchini" },
    { img: Image11, desc: "Radish" },

];
const boxes3 = [
  { img: Image12, desc: "Bell Pepper" },
  { img: Image13, desc: "Okra" },
  { img: Image14, desc: "Peas" },
  { img: Image15, desc: "Lettuce" },
  { img: Image16, desc: "Asparagus" },

];

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Fresh & Organic Vegetables</h1>
          <p>Discover a wide range of farm-fresh vegetables delivered to your doorstep.</p>
          <a href="/categories">
            <button className="shop-now-btn">Shop Now</button>
          </a>
        </div>
      </div>

      <div className="Home_categories">
        <h2>Shop by Categories</h2>
        <div className="Home_categories-container">
          <div className="Home_category-card">
            <a href="/leafygreens">
              <img className="hoover-target" src={leafyGreen} alt="Leafy Greens" />
              <p className="hover-paragraph">Leafy Greens</p>
            </a>
          </div>
          <div className="Home_category-card">
            <a href="/rootvegetables">
              <img className="hoover-target" src={rootVegetable} alt="Root Vegetables" />
              <p className="hover-paragraph">Root Vegetables</p>
            </a>
          </div>
          <div className="Home_category-card">
            <a href="/organicproduce">
              <img className="hoover-target" src={organicProduce} alt="Organic Produce" />
              <p className="hover-paragraph">Organic Produce</p>
            </a>
          </div>
          <div className="Home_category-card">
            <a href="/herbsspices">
              <img className="hoover-target" src={herbSpices} alt="Herbs & Spices" />
              <p className="hover-paragraph">Herbs & Spices</p>
            </a>
          </div>
          <div className="Home_category-card">
            <a href="/exoticvegetables">
              <img className="hoover-target" src={exoticvegetables} alt="Exotic Vegetables" />
              <p className="hover-paragraph">Exotic Vegetables</p>
            </a>
          </div>
        </div>
      </div>

      <div className="exclusive-offer">
        <div className="exclusive-offer-content">
          <h1>Healthy Eating Made Easy</h1>
          <h3>Grab Fresh Veggies at 25% Off!</h3>
        </div>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-card">
          <img src={featuredProductCarrot} alt="Featured Product" />
          <h3>Organic Carrots</h3>
          <p>Rs.80.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Organic Carrots", price: 80 })}>
            Add to Cart
          </button>
          </div>

        <div className="product-card">
          <img src={featuredProductCabbage} alt="Featured Product" />
          <h3>Organic Cabbages</h3>
          <p>Rs.25.00 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Organic Cabbages", price: 25 })}>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={featuredProductBroccoli} alt="Featured Product" />
          <h3>Organic Broccoli</h3>
          <p>Rs.50 / kg</p>
          <button onClick={() => handleAddToCart({ name: "Organic Broccoli", price: 50 })}>Add to Cart</button>
        </div>
        <div>
          <button className="explore-more-btn">
            <a href="/categories">
              <span>Explore More</span>
            </a>
          </button>
        </div>
      </div>


      <h2 className="Needs">You Might Need</h2>
      <div className="box-container2">
  {boxes2.map((box, index) => (
    <div className="box2" key={index}>
      <img src={box.img} alt={` ${index + 1}`} className="box-image2" />
      <h3 className="box-description2">{box.desc}<br />(Local shop)</h3>
      <p className="weight">500 gm.</p>
      <p className="amount">Rs.80.00 / kg</p>
      <button
        className="add-button-box-container2"
        onClick={() => handleAddToCart({ name: box.desc, price: 80 })} // Use `box.desc` here
      >
        <span className="Plush">+</span>
      </button>
    </div>
  ))}
</div>

<div className="box-container2">
  {boxes3.map((box, index) => (
    <div className="box2" key={index}>
      <img src={box.img} alt={` ${index + 1}`} className="box-image2" />
      <h3 className="box-description2">{box.desc}<br />(Local shop)</h3>
      <p className="weight">500 gm.</p>
      <p className="amount">Rs.80.00 / kg</p>
      <button
        className="add-button-box-container2"
        onClick={() => handleAddToCart({ name: box.desc, price: 80 })} // Use `box.desc` here
      >
        <span className="Plush">+</span>
      </button>
    </div>
  ))}
</div>

      <div className="fast-delivery">
        <div className="fast-delivery-content">
          <h1>Get the freshest vegetables at your doorstep in no time! </h1>
          <h3>Same-day delivery available. Order now and enjoy quick, reliable service! </h3>
        </div>
      </div>








      {/* Show the message when `cartMessage` is true */}
      {cartMessage && (
        <div className="cart-message">
          <p>Added to Cart</p>
        </div>
      )}
    </div>
  );
};

export default Vegetables;
