import React from 'react';
import Cilantro from '../Assets/Cilantro.jpg';
import Parsley from '../Assets/Parsley.jpg';
import Basil from '../Assets/Basil.jpg';
import Mint from '../Assets/Mint.jpg';
import ChiliPeppers from '../Assets/ChiliPeppers.jpg';
import Garlic from '../Assets/Garlic.jpg';
import Ginger from '../Assets/Ginger.jpg';
import Turmeric from '../Assets/Turmeric.jpg';
import './Herbs.css';

const Herbs = () => {
    return (
        <div>
        <h1 className="Herbs_heading">Herbs&Spices</h1>
        <div className="Herbs_categories">
            <div className="Herbs_category-card">
                <img src={Cilantro} alt="Cilantro"/>
                <h3>Cilantro</h3>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Parsley} alt="Parsley"/>
                <h3>Parsley</h3>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Basil} alt="Basil"/>
                <h3>Basil</h3>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Mint} alt="Mint"/>
                <h3>Mint</h3>
            </div>
            
            <div className="Herbs_category-card">
                <img src={ChiliPeppers} alt="Chili Peppers"/>
                <h3>Chili Peppers</h3>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Garlic} alt="Garlic"/>
                <h3>Garlic</h3>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Ginger} alt="Ginger"/>
                <h3>Ginger</h3>
            </div>
            
            <div className="Herbs_category-card">
                <img src={Turmeric} alt="Turmeric"/>
                <h3>Turmeric</h3>
            </div>
        </div>
    </div>
    );
}

export default Herbs;
