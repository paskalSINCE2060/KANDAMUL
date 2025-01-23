import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  // List of vegetable names for search recommendations
  const vegetableList = [
    "Leafy Greens",
    "Root Vegetables",
    "Organic Produce",
    "Herbs & Spices",
    "Exotic Vegetables",
    "Seasonal Vegetables",
    "Micro Greens",
    "Gourmet Vegetables",
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter vegetables based on input
    if (query) {
      const filtered = vegetableList.filter((veg) =>
        veg.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (vegetable) => {
    setSearchQuery(""); // Clear search input
    setSuggestions([]); // Clear suggestions
    const formattedPath = vegetable.toLowerCase().replace(/\s+/g, ""); // Format vegetable name to match route
    navigate(`/${formattedPath}`);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="FreshVeggies Logo" />
        <p>GhasPath</p>
      </div>
      <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => setMenu("categories")}
          className="categories-dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/categories"
          >
            Categories
          </Link>
          {menu === "categories" ? <hr /> : <></>}
          <ul className={`dropdown-menu ${dropdownActive ? "active" : ""}`}>
            {vegetableList.map((veg, index) => {
              const formattedPath = veg.toLowerCase().replace(/\s+/g, "");
              return (
                <li key={index} onClick={() => setMenu(formattedPath)}>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/${formattedPath}`}
                  >
                    {veg}
                  </Link>
                  {menu === formattedPath ? <hr /> : <></>}
                </li>
              );
            })}
          </ul>
        </li>
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/about">
            About Us
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/contact"
          >
            Contact
          </Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for fresh vegetables..."
              className="search-bar"
              value={searchQuery}
              onChange={handleSearchInput}
            />
            {/* Display suggestions */}
            {suggestions.length > 0 && (
              <ul className="search-suggestions">
                {suggestions.map((veg, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(veg)}
                    className="search-suggestion-item"
                  >
                    {veg}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/cart">
            <button className="nav-cart-count">Cart ({cartCount})</button>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/login">
            <button className="login-btn">Login/Signup</button>
          </Link>
        </li>
      </ul>
      <div className="toggle-btn" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
