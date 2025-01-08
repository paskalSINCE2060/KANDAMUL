import React from 'react';
import Broccoli from '../Assets/featuredProduct_Broccoli.jpg';
import Basil from '../Assets/Basil.jpg';
import Radish from '../Assets/Radish.jpg';
import SunflowerShoots from '../Assets/SunflowerShoots.jpg';
import PeaShoots from '../Assets/PeaShoots.jpg';
import BeetGreens from '../Assets/BeetGreens.jpg';
import MustardGreens from '../Assets/MustardGreens.jpg';
import Cilantro from '../Assets/Cilantro.jpg';
import './Micro.css';

const MicroG = () => {
    return (
    <div>
<h1 className="MicroGreens_heading">Micro Greens</h1>
<div className="MicroGreens_categories">
    <div className="MicroGreens_category-card">
        <img src={Broccoli} alt="Broccoli"/>
        <h3>Broccoli</h3>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={Basil} alt="Basil"/>
        <h3>Basil</h3>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={Radish} alt="Radish"/>
        <h3>Radish</h3>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={SunflowerShoots} alt="Sunflower Shoots"/>
        <h3>Sunflower Shoots</h3>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={PeaShoots} alt="PeaShoots"/>
        <h3>Pea Shoots</h3>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={BeetGreens} alt="Beet Greens"/>
        <h3>Beet Greens</h3>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={MustardGreens} alt="Mustard Greens"/>
        <h3>Mustard Greens</h3>
    </div>
    
    <div className="MicroGreens_category-card">
        <img src={Cilantro} alt="Cilantro"/>
        <h3>Cilantro</h3>
    </div>
</div>
</div>

    );
}

export default MicroG;