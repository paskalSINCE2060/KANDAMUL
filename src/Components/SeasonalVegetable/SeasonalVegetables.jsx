import React from 'react';
import Asparagus from '../Assets/Asparagus.jpg';
import Peas from '../Assets/Peas.jpg';
import Zucchini from '../Assets/Zucchini.jpg';
import Cucumbers from '../Assets/Cucumbers.jpg';
import Pumpkin from '../Assets/Pumpkin.jpg';
import ButternutSquash from '../Assets/ButternutSquash.jpg';
import Parsnips from '../Assets/Parsnips.jpg';
import Turnips from '../Assets/Turnips.jpg';
import './Seasonal.css';

const SeasonalVegetables = () => {
    return (
<div>
    <h1 className="SeasonalVegetables_heading">Seasonal Vegetables</h1>
    <div className="SeasonalVegetables_categories">
        <div className="SeasonalVegetables_category-card">
            <img src={Asparagus} alt="Asparagus"/>
            <h3>Asparagus(Spring)</h3>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Peas} alt="Peas"/>
            <h3>Peas(Spring)</h3>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Zucchini} alt="Zucchini"/>
            <h3>Zucchini(Summer)</h3>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Cucumbers} alt="Cucumbers"/>
            <h3>Cucumbers(Summer)</h3>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Pumpkin} alt="Pumpkin"/>
            <h3>Pumpkin(Full Seasonal)</h3>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={ButternutSquash} alt="ButternutSquash"/>
            <h3>Butternut Squash(Full Seasonal)</h3>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Parsnips} alt="Parsnips"/>
            <h3>Parsnips(Winter Seasonal)</h3>
        </div>
        
        <div className="SeasonalVegetables_category-card">
            <img src={Turnips} alt="Turnips"/>
            <h3>Turnips(Winter Seasonal)</h3>
        </div>
    </div>
</div>

    );
}

export default SeasonalVegetables;