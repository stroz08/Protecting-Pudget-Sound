import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div id='navbar'>
            <NavLink className='header' to='/'><h1> Protecting Puget Sound </h1></NavLink>
            <div className='link-container'>
                <NavLink className='link' to='/map' activeclassname='activeLink'>Map</NavLink>
                <NavLink className='link' to='/explore' activeclassname='activeLink'>Explore</NavLink>
                <NavLink className='link' to='/getinvolved' activeclassname='activeLink'>Get Involved</NavLink>
                <NavLink className='link' to='/about' activeclassname='activeLink'>About Us</NavLink>
            </div>
        </div>  
    );
}

export { NavBar };