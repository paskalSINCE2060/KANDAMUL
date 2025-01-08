import React from "react";
import leafyGreen from "../Assets/leafy_green.jpg";
import rootVegetable from "../Assets/rootVegetable.jpg";
import organicProduce from "../Assets/organicProduce.jpg";
import featuredProductCarrot from "../Assets/featuredProduct_carrot.jpg";
import herbSpices from "../Assets/herbsspices.jpg";
import exoticvegetables from "../Assets/exoticvegetables.jpg";
import featuredProductCabbage from "../Assets/featuredProduct_cabbage.jpg";
import featuredProductBroccoli from "../Assets/featuredProduct_Broccoli.jpg";
import './Vegetables.css'

const Vegetables = () => {
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
                  <a href="/leafygreens"><img className="hoover-target" src={leafyGreen} alt="Leafy Greens" />
                  <p className="hover-paragraph">Leafy Greens</p></a>

                </div>
                <div className="Home_category-card">
                  <a href="/rootvegetables"><img className="hoover-target" src={rootVegetable} alt="Root Vegetables" />
                  <p className="hover-paragraph">Root Vegetables</p></a>
                </div>
                <div className="Home_category-card">
                  <a href="/organicproduce"><img className="hoover-target" src={organicProduce} alt="Organic Produce" />
                  <p className="hover-paragraph">Organic Produce</p></a>
                </div>
                <div className="Home_category-card">
                  <a href="/herbsspices"><img className="hoover-target" src={herbSpices} alt="Herbs & Spices" />
                  <p className="hover-paragraph">Herbs & Spices</p></a>
                </div>
                <div className="Home_category-card">
                  <a href="/exoticvegetables"><img className="hoover-target" src={exoticvegetables} alt="Exotic Vegetables" />
                  <p className="hover-paragraph">Exotic Vegetables</p></a>
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
                <button>Add to Cart</button>
              </div>

              <div className="product-card">
                <img src={featuredProductCabbage} alt="Featured Product" />
                <h3>Organic Cabbages</h3>
                <p>Rs.25.00 / kg</p>
                <button>Add to Cart</button>
              </div>

              <div className="product-card">
                <img src={featuredProductBroccoli} alt="Featured Product" />
                <h3>Organic Broccoli</h3>
                <p>Rs.50 / kg</p>
                <button>Add to Cart</button>
              </div>
              <div>
              <button className="explore-more-btn"><a href="/categories"><span>Explore More</span></a></button>
              </div>
            </div>

            <div className="fast-delivery">
              <div className="fast-delivery-content">
              <h1>Get the freshest vegetables at your doorstep in no time! </h1>
              <h3>Same-day delivery available.Order now and enjoy quick, reliable service!  </h3>
              </div>
            </div>
          </div>
        );
      };
 
export default Vegetables;