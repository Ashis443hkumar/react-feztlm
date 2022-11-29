import React,{useState} from "react";
import './header'
export default function Header() {

  const [ismobile, setismobile] = useState(false)

  return (
    <div className="header " >
      <div><h3>Softkingo</h3></div>
      <nav className= { ismobile ? "navbar-mobile-link" :"navbar-list"} onClick={() => setismobile(false)}>
        <ul >
          <li><a href="">home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Service</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Contact</a></li>

          <li><a href="" className="btn text-white">Login</a></li>
          <li><a href="" className="btn btn-outline-light mt-3 px-3 py-1">Sign Up</a></li>
        </ul>
      
      </nav>
    
      <div className="navbar-mobile-icon" onClick={() => setismobile(!ismobile)}>
        {
          ismobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)
        }
        
        
      </div>

    </div>
  );
}
