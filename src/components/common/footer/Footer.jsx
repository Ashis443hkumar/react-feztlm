import React from "react";
import './footer.css'
export default function Footer() {
  return (
    <div className="footer">
      <div className="">
        <h4>EstateAgency</h4>
        <p>Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis sed aute irure.</p>
        <p>Phone . contact@example.com</p>
        <p>Email . +54 356 945234</p>
      </div>
      <div className="">
        <h4>The Company</h4>
        <ul>
          <li>Side Map</li>
          <li>Legal</li>
          <li>Agent Admin</li>
          <li>Side Map</li>
          <li> Careers</li>
          <li>Affiliate</li>
          <li> Privacy Policy</li>
        </ul>
      </div>
      <div className="">
        <h4>International sitesy</h4>
        <ul>
          <li>Venezuela</li>
          <li>China</li>
          <li>Hong Kong</li>
          <li>Argentina</li>
          <li>Singapore</li>
          <li>Philippines</li>
        </ul>
      </div>
      <div className="footer-social">
        <h4>Floww us</h4>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
      
    </div>
  );
}
