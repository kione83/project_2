import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './logo.svg'; // Ensure you have imported your logo correctly

const Header = () => {
  return (
    <div id="header-parent-flex">
        <img src={logo} alt="logo" width="100" height="100"/>
        <ul className='flex-me'>
            <li><Link to="/">Home</Link></li> {/* Use Link component for navigation */}
            <li><Link to="/Products">Products</Link></li> {/* Link to Products */}
            <li><Link to="/Services">Services</Link></li> {/* Assuming you have a Services route */}
            <li><Link to="/Contact">Contact</Link></li> {/* Assuming you have a Contact route */}
        </ul>
    </div>
  );
}

export default Header;