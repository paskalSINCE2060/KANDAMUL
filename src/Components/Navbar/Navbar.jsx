import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="FreshVeggies Logo" />
        <p>KANDAMUL</p>
      </div>
      <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
        <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration:'none',color:'white' }} to ='/'>Home</Link>{menu==="home"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("categories")}} 
          className="categories-dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
          ><Link style={{textDecoration:'none',color:'white'}} to ='/categories'>Categories</Link>
          {menu==="categories"?<hr/>:<></>}
          <ul className={`dropdown-menu ${dropdownActive ? "active" : ""}`}>
            <li onClick={()=>{setMenu("leafygreens")}}> <Link style={{textDecoration:'none',color:'white'}} to ='/leafygreens'>Leafy Greens</Link> {menu==="leafygreens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("rootvegetables")}}> <Link style={{textDecoration:'none',color:'white'}} to ='/rootvegetables'>Root Vegetables</Link> {menu==="rootvegetables"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("organicproduce")}}> <Link style={{textDecoration:'none',color:'white'}} to ='/organicproduce'>Organic Produce</Link> {menu==="organicproduce"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("herbsspices")}}> <Link style={{textDecoration:'none',color:'white'}} to ='/herbsspices'>Herbs & Spices</Link> {menu==="herbs&spices"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("exoticvegetables")}}> <Link style={{textDecoration:'none',color:'white'}} to ='/exoticvegetables'>Exotic Vegetables</Link> {menu==="exoticvegetables"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("seasonalvegetables")}}> <Link style={{textDecoration:'none',color:'white'}} to ='/seasonalvegetables'>Seasonal Vegetables</Link> {menu==="seasonalvegetables"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("microgreens")}}> <Link style={{textDecoration:'none',color:'white'}} to ='/microgreens'>Micro Greens</Link> {menu==="microgreens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("gourmetvegetables")}}> <Link style={{textDecoration:'none',color:'white'}} to ='/gourmetvegetables'>Gourmet Vegetables</Link> {menu==="gourmetvegetables"?<hr/>:<></>}</li>

          </ul>
        </li>
        <li onClick={()=>{setMenu("about")}} > <Link style={{textDecoration:'none',color:'white'}} to='/about'>About Us</Link> {menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}} > <Link style={{textDecoration:'none',color:'white'}} to='/contact'>Contact</Link> {menu==="contact"?<hr/>:<></>}</li>
        <li>
          <input
            type="text"
            placeholder="Search for fresh vegetables..."
            className="search-bar"
          />
        </li>
        <li>
          <Link style={{textDecoration:'none'}} to ='/cart'><button className="nav-cart-count">Cart (0)</button></Link>
        </li>
        <li >
          <Link style={{textDecoration:'none'}} to ='/login'><button className="login-btn">Login/Signup</button></Link>
        </li>
      </ul>
      <div className="toggle-btn" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
