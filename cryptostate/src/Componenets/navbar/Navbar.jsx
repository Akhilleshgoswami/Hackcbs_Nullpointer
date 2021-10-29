import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            
            <div className="navbar-container flex-row">
                <ul className="navbar-items ">
                    <li className="navbar-item ">Home</li>
                    <li className="navbar-item ">Properties</li>
                    <li className="navbar-item ">About Us</li>
                </ul>

                
            </div>

            <button className="signup-button flex-row">Sign Up</button>
        </div>
    )
}

export default Navbar
