import React from 'react';
import Carrot from '../Assets/featuredProduct_carrot.jpg';
import Potatoes from '../Assets/Potatoes.jpg';
import Beets from '../Assets/Beets.jpg';
import Turnips from '../Assets/Turnips.jpg';
import Radishes from '../Assets/Radishes.jpg';
import Parsnips from '../Assets/Parsnips.jpg';
import Rutabagas from '../Assets/Rutabagas.jpg';
import Yams from '../Assets/Yams.jpg';
import './RootVegetable.css';

const RootVegetable = () => {
    return (
        <div>
            <h1 className="RootVegetable_heading">Root Vegetables</h1>
            <div className="RootVegetable_categories">
                <div className="RootVegetable_category-card">
                    <img src={Carrot} alt="Carrot"/>
                    <h3>Carrot</h3>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Potatoes} alt="Potatoes"/>
                    <h3>Potatoes</h3>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Beets} alt="Beets (Beetroot)"/>
                    <h3>Beets (Beetroot)</h3>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Turnips} alt="Turnips"/>
                    <h3>Turnips</h3>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Radishes} alt="Radishes"/>
                    <h3>Radishes</h3>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Parsnips} alt="Parsnips"/>
                    <h3>Parsnips</h3>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Rutabagas} alt="Rutabagas"/>
                    <h3>Rutabagas</h3>
                </div>
                
                <div className="RootVegetable_category-card">
                    <img src={Yams} alt="Yams"/>
                    <h3>Yams</h3>
                </div>
            </div>
        </div>
    );
}

export default RootVegetable;
