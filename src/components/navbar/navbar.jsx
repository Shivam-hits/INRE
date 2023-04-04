import React from 'react'
import "./navbar.css"
import logo from "../../image/title.png"
function Navbar() {
    
  return (
    
    <div>
        <div className='navbar'>
            <img src={logo} className="logo" alt="logo" />
            <ul className="options">
                <li>Home</li>
                <li>Our offerings</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <li>Blogs</li>
            </ul>
            <button className='btn'>Register Now</button>
        </div>
        <hr className='Navbar_linebreak' />
    </div>
  )
}

export default Navbar;