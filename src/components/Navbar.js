import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const handleClick = () => {
        console.log("signup")
    }
  return (
    <div className='navbar'>
        <NavLink to="/contact" className="contact">Contact us</NavLink>
        <button onClick={handleClick} className="btn">Signup</button>
    </div>
  )
}

export default Navbar;