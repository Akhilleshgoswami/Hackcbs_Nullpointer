import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {

    
    return (

        <nav className="navbar m-5 flex justify-between item-center h-16 text-block relative shadow-sm">
            <Link to='/' className="pl-8">
                CryptoState
            </Link>


            <div className="pr-8 md:block hidden" >
                <Link to='/' className="pl-8">
                    Home
                </Link>
                <Link to='/properties' className="pl-8">
                    Properties
                </Link>
                <Link to='/about' className="pl-8">
                    About Us
                </Link>
            </div>
           
            
        </nav>

    )
}

export default Navbar
