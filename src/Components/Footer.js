import React from "react"
import './Footer.css'




function Footer(){
    return (
      <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-brand">
          <h2>Golden Blitz</h2>
          <p>Crafting elegance since 1985</p>
        </div>
    
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              &nbsp; 123 Elegance Street, Colombo 07, Sri Lanka
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              &nbsp; support@Golden Blitzgit.com
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              &nbsp; +94 77 123 4567
            </li>
          </ul>
        </div>
    

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Golden Blitz. All rights reserved.</p>
      </div>
    </footer>
      );
    
}
export default Footer