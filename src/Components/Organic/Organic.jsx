import React from 'react';
import Tomatoes from '../Assets/Tomatoes.jpg';
import Broccoli from '../Assets/featuredProduct_Broccoli.jpg';
import Spinach from '../Assets/spinach.jpg';
import Cauliflower from '../Assets/Cauliflower.jpg';
import Eggplant from '../Assets/Eggplant.jpg';
import Celery from '../Assets/Celery.jpg';
import Onions from '../Assets/Onions.jpg';
import Mushrooms from '../Assets/Mushrooms.jpg';
import './Organic.css';

const Organic = () => {
    return (
        <div>
        <h1 className="OrganicProduce_heading">Organic Produce</h1>
        <div className="OrganicProduce_categories">
            <div className="OrganicProduce_category-card">
                <img src={Tomatoes} alt="Tomatoes"/>
                <h3>Tomatoes</h3>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Broccoli} alt="Broccoli"/>
                <h3>Broccoli</h3>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Spinach} alt="Beets (Spinach)"/>
                <h3>Spinach</h3>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Cauliflower} alt="Cauliflower"/>
                <h3>Cauliflower</h3>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Eggplant} alt="Eggplant"/>
                <h3>Eggplant</h3>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Celery} alt="Celery"/>
                <h3>Celery</h3>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Onions} alt="Onions"/>
                <h3>Onions</h3>
            </div>
            
            <div className="OrganicProduce_category-card">
                <img src={Mushrooms} alt="Mushrooms"/>
                <h3>Mushrooms</h3>
            </div>
        </div>
    </div>
    );
}

export default Organic;