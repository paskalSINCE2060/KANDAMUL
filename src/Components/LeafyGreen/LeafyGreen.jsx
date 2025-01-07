import React from 'react';
import LeafyGreen_categories from '../Assets/leafy_green_categories.jpg';
import RootVegetables_categories from '../Assets/rootVegetable_categories.jpg';
import OrganicProduce_categories from '../Assets/organicProduce_categories.jpg';
import HerbsSpices_categories from '../Assets/herbsspices_categories.jpg';
import ExoticVegetables_categories from '../Assets/exoticvegetables_categories.jpg';
import SeasonalVegetables_categories from '../Assets/seasonalvegetables_categories.jpg';
import MicroGreens_categories from '../Assets/microgreens_categories.jpg';
import GourmetVegetables_categories from '../Assets/gourmetvegetables_categories.jpg';
import './LeafyGreen.css';

const LeafyGreen = () => {
    return (
        <div>
            <h1 className="LeafyGreen_heading">Leafy Greens</h1>
    <div class="LeafyGreen_categories">
      <div class="LeafyGreen_category-card">
        <img src={LeafyGreen_categories} alt="Leafy Greens"/>
        <h3>Spinach</h3>
      </div>
      
      
      <div class="LeafyGreen_category-card">
        <img src={RootVegetables_categories} alt="Root Vegetables"/>
        <h3>Lettuce</h3>
      </div>
      
      
      <div class="LeafyGreen_category-card">
        <img src={OrganicProduce_categories} alt="Organic Produce"/>
        <h3>Swiss Chard</h3>
      </div>
      
     
      <div class="LeafyGreen_category-card">
        <img src={HerbsSpices_categories} alt="Herbs and Spices"/>
        <h3>Collard Greens</h3>
      </div>
      
    
      <div class="LeafyGreen_category-card">
        <img src={ExoticVegetables_categories} alt="Exotic Vegetables"/>
        <h3>Mustard Greens</h3>
      </div>

      <div class="LeafyGreen_category-card">
        <img src={SeasonalVegetables_categories} alt="Seasonal Vegetables"/>
        <h3>Watercress</h3>
      </div>

      <div class="LeafyGreen_category-card">
        <img src={MicroGreens_categories} alt="Microgreens"/>
        <h3>Turnip Greens</h3>
      </div>

      <div class="LeafyGreen_category-card">
        <img src={GourmetVegetables_categories} alt="Gourmet Vegetables"/>
        <h3>Dandelion Greens</h3>
      </div>
    </div>
    </div>

    );
}

export default LeafyGreen;