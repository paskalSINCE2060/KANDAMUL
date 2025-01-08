import React from 'react';
import Facebook from '../Assets/facebook_logo.png';
import Twitter from '../Assets/twitter_logo.png';
import Instagram from '../Assets/Instagram_logo.png';	
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
  <div className="footer-container">
  
    <div className="footer-column">
      <h4>About Us</h4>
      <p>We deliver fresh, organic vegetables straight from the farm to your doorstep. Quality you can trust!</p>
    </div>

   
    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

 
    <div className="footer-column">
      <h4>Contact Us</h4>
      <p>Email: support@kandamul.com</p>
      <p>Phone: +977 9849997322</p>
      <p>Address: Kathmandu, Baneshwor</p>
    </div>

   
    <div className="footer-column">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="https://www.facebook.com/gaaubesilogistics/"><img src={Facebook} alt="Facebook"/></a>
        <a href="https://kandamul.gaaubesi.com.np/"><img src={Twitter} alt="Twitter"/></a>
        <a href="https://kandamul.gaaubesi.com.np/swagger/"><img src={Instagram} alt="Instagram"/></a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 KANDAMUL. All Rights Reserved.</p>
  </div>

        </div>
    )
}

export default Footer;