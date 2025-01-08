import React from 'react';
import './Categories.css';
import LeafyGreen_categories from '../Assets/leafy_green_categories.jpg';
import RootVegetables_categories from '../Assets/rootVegetable_categories.jpg';
import OrganicProduce_categories from '../Assets/organicProduce_categories.jpg';
import HerbsSpices_categories from '../Assets/herbsspices_categories.jpg';
import ExoticVegetables_categories from '../Assets/exoticvegetables_categories.jpg';
import SeasonalVegetables_categories from '../Assets/seasonalvegetables_categories.jpg';
import MicroGreens_categories from '../Assets/microgreens_categories.jpg';
import GourmetVegetables_categories from '../Assets/gourmetvegetables_categories.jpg';

const Categories = () => {
    return (
        <div class="categories">
      
        <div class="category-card">
          <a href='/leafygreens'><img src={LeafyGreen_categories} alt="Leafy Greens"/>
          <h3>Leafy Greens</h3></a>
        </div>
        
        
        <div class="category-card">
          <a href='/rootvegetables'><img src={RootVegetables_categories} alt="Root Vegetables"/>
          <h3>Root Vegetables</h3></a>
          
        </div>
        
        
        <div class="category-card">
        <a href='/organicproduce'>
          <img src={OrganicProduce_categories}alt="Organic Produce"/>
          <h3>Organic Produce</h3>
          </a>
        </div>
        
       
        <div class="category-card">
          <a href='/herbsspices'>
          <img src={HerbsSpices_categories} alt="Herbs and Spices"/>
          <h3>Herbs and Spices</h3>
          </a>
        </div>
        
      
        <div class="category-card">
          <a href='/exoticvegetables'>
          <img src={ExoticVegetables_categories} alt="Exotic Vegetables"/>
          <h3>Exotic Vegetables</h3>
          </a>
        </div>

        <div class="category-card">
          <a href='/seasonalvegetables'>
          <img src={SeasonalVegetables_categories} alt="Seasonal Vegetables"/>
          <h3>Seasonal Vegetables</h3>
          </a>
        </div>

        <div class="category-card">
          <a href='/microgreens'>
          <img src={MicroGreens_categories} alt="Microgreens"/>
          <h3>Microgreens</h3>
          </a>
        </div>

        <div class="category-card">
          <a href='/gourmetvegetables'>
          <img src={GourmetVegetables_categories} alt="GourmetVegetables"/>
          <h3>GourmetVegetables</h3>
          </a>
        </div>
      </div>

      
    )
}

export default Categories;