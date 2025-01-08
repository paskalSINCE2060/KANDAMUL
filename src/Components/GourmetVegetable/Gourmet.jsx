import React from 'react';
import './Gourmet.css';
import Artichokes from '../Assets/Artichokes.jpg';
import WhiteAsparagus from '../Assets/WhiteAsparagus.jpg';
import TruffleMushrooms from '../Assets/TruffleMushrooms.jpg';
import BabyCarrots from '../Assets/BabyCarrots.jpg';
import HeirloomTomatoes from '../Assets/HeirloomTomatoes.jpg';
import RomanescoBroccoli from '../Assets/RomanescoBroccoli.jpg';
import Shallots from '../Assets/Shallots.jpg';
import FiddleheadFerns from '../Assets/FiddleheadFerns.jpg'


const Gourmet = () => {
    return (
    <div>
        <h1 className="GourmetVegetables_heading">Gourmet Vegetables</h1>
        <div class="GourmetVegetables_categories">
        <div class="GourmetVegetables_category-card">
        <img src={Artichokes} alt="Artichokes"/>
        <h3>Artichokes</h3>
    </div>
  
  
  <div class="GourmetVegetables_category-card">
    <img src={WhiteAsparagus} alt="WhiteAsparagus"/>
    <h3>WhiteAsparagus</h3>
  </div>
  
  
  <div class="GourmetVegetables_category-card">
    <img src={TruffleMushrooms} alt="Truffle Mushrooms"/>
    <h3>Truffle Mushrooms</h3>
  </div>
  
 
  <div class="GourmetVegetables_category-card">
    <img src={BabyCarrots} alt="Baby Carrots"/>
    <h3>Baby Carrots</h3>
  </div>
  

  <div class="GourmetVegetables_category-card">
    <img src={HeirloomTomatoes} alt="Heirloom Tomatoes"/>
    <h3>Heirloom Tomatoes</h3>
  </div>

  <div class="GourmetVegetables_category-card">
    <img src={RomanescoBroccoli} alt="Romanesco Broccoli"/>
    <h3>Romanesco Broccoli</h3>
  </div>

  <div class="GourmetVegetables_category-card">
    <img src={Shallots} alt="Shallots"/>
    <h3>Shallots</h3>
  </div>

  <div class="GourmetVegetables_category-card">
    <img src={FiddleheadFerns} alt="FiddleheadFerns"/>
    <h3>Fiddlehead Ferns</h3>
  </div>
</div>
</div>

    )
}

export default Gourmet;