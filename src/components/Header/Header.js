import './Header.css';
import React, { useContext } from 'react';
import webLogo from '../../images/web-logo.png';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

function Header() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="Header">
      <div className="container">
        <nav>
          <div className="web-logo">
            <img src={webLogo} className="w-50" alt="website logo"/>
          </div>
          <div className="web-links">
            <Link to="/">Home</Link>
            <Link to="/book">Bookings</Link>
            { (loggedInUser.email === '') ? 
              <Link to="/login">Login</Link> :
              <p onClick={()=> setLoggedInUser({name: '', email: ''})}>Log out</p> 
            }
          </div>
        </nav>
        <h1 className="text-center pt-5 display-2">Burj Al Arab</h1>
        <h1 className="text-center pb-5">A global icon of Arabian Luxury</h1>
      </div>
    </div>
  )
}

export default Header;
 