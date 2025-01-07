import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import LeafyGreen from './Pages/LeafyGreens';
import RootVegetables from './Pages/RootVegetables';
import OrganicPRoduce from './Pages/OrganicProduce';
import HerbsSpices from './Pages/HerbsSpices';
import ExoticVegetables from './Pages/ExoticVEgetables';
import Seasonal from './Pages/Seasonal';
import MicroGreens from './Pages/MicroGreens';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<ShopCategory/> } />
        <Route path="/leafygreens" element={<LeafyGreen category="leafygreens"/> } />
        <Route path="/rootvegetables" element={<RootVegetables category="rootvegetables"/> } />
        <Route path="/organicproduce" element={<OrganicPRoduce category="organicproduce"/> } />
        <Route path="/herbsspices" element={<HerbsSpices category="herbsspices"/> } />
        <Route path="/exoticvegetables" element={<ExoticVegetables category="exoticvegetables"/> } />
        <Route path="/seasonalvegetables" element={<Seasonal category="seasonalvegetables"/> } />
        <Route path="/microgreen" element={<MicroGreens category="microgreen"/> } />
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
