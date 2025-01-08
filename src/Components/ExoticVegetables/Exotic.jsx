import React from 'react';	
import BitterMelon from '../Assets/BitterMelon.jpg';
import Romanesco from '../Assets/Romanesco.jpg';
import Kohlrabi from '../Assets/Kohlrabi.jpg';
import Mint from '../Assets/Mint.jpg';
import PurpleYam from '../Assets/PurpleYam.jpg';
import Chayote from '../Assets/Chayote.jpg';
import YardlongBean from '../Assets/YardlongBean.jpg';
import Fennel from '../Assets/Fennel.jpg';
import './Exotic.css';

const Exotic = ()=>{
    return (
<div>
    <h1 className="Exotic_heading">Exotic Vegetables</h1>
    <div className="Exotic_categories">
        <div className="Exotic_category-card">
            <img src={BitterMelon} alt="Bitter Melon"/>
            <h3>Bitter Melon</h3>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Romanesco} alt="Romanesco"/>
            <h3>Romanesco</h3>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Kohlrabi} alt="Kohlrabi"/>
            <h3>Kohlrabi</h3>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Mint} alt="Mint"/>
            <h3>Mint</h3>
        </div>
        
        <div className="Exotic_category-card">
            <img src={PurpleYam} alt="Purple Yam"/>
            <h3>Purple Yam</h3>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Chayote} alt="Chayote"/>
            <h3>Chayote</h3>
        </div>
        
        <div className="Exotic_category-card">
            <img src={YardlongBean} alt="Yardlong Bean"/>
            <h3>Yardlong Bean</h3>
        </div>
        
        <div className="Exotic_category-card">
            <img src={Fennel} alt="Fennel"/>
            <h3>Fennel</h3>
        </div>
    </div>
</div>

    )
}

export default Exotic;