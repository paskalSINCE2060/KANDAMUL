import React from 'react';
import Spinach from '../Assets/spinach.jpg';
import Lettuce from '../Assets/Lettuce.jpg';
import SwissChard from '../Assets/swisschard.jpg';
import CollardGreens from '../Assets/CollardGreens.jpg';
import MustardGreens from '../Assets/MustardGreens.jpg';
import Watercress from '../Assets/Watercress.jpg';
import TurnipGreens from '../Assets/TurnipGreens.jpg';
import DandelionGreens from '../Assets/DandelionGreens.jpg';
import './LeafyGreen.css';

const LeafyGreen = () => {
    return (
        <div>
            <h1 className="LeafyGreen_heading">Leafy Greens</h1>
    <div class="LeafyGreen_categories">
      <div class="LeafyGreen_category-card">
        <img src={Spinach} alt="Spinach"/>
        <h3>Spinach</h3>
      </div>
      
      
      <div class="LeafyGreen_category-card">
        <img src={Lettuce} alt="Lettuce"/>
        <h3>Lettuce</h3>
      </div>
      
      
      <div class="LeafyGreen_category-card">
        <img src={SwissChard} alt="Swiss Chard"/>
        <h3>Swiss Chard</h3>
      </div>
      
     
      <div class="LeafyGreen_category-card">
        <img src={CollardGreens} alt="Collard Greens"/>
        <h3>Collard Greens</h3>
      </div>
      
    
      <div class="LeafyGreen_category-card">
        <img src={MustardGreens} alt="Mustard Greens"/>
        <h3>Mustard Greens</h3>
      </div>

      <div class="LeafyGreen_category-card">
        <img src={Watercress} alt="Watercress"/>
        <h3>Watercress</h3>
      </div>

      <div class="LeafyGreen_category-card">
        <img src={TurnipGreens} alt="Turnip Greens"/>
        <h3>Turnip Greens</h3>
      </div>

      <div class="LeafyGreen_category-card">
        <img src={DandelionGreens} alt="DandelionGreens"/>
        <h3>Dandelion Greens</h3>
      </div>
    </div>
    </div>

    );
}

export default LeafyGreen;