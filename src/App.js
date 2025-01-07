import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<ShopCategory/> } />
        <Route path="/leafygreens" element={<ShopCategory category="leafygreens"/> } />
        <Route path="/rootvegetables" element={<ShopCategory category="rootvegetables"/> } />
        <Route path="/organicproduce" element={<ShopCategory category="organicproduce"/> } />
        <Route path="/herbsspices" element={<ShopCategory category="herbsspices"/> } />
        <Route path="/exoticvegetables" element={<ShopCategory category="exoticvegetables"/> } />
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
