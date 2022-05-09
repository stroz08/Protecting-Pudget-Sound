import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div id='navbar'>
            <NavLink className='header' to='/'><h1> Protecting Puget Sound </h1></NavLink>
            <div className='link-container'>
                <NavLink className='link' to='/map' activeclassname='activeLink'>Map</NavLink>
                <NavLink className='link' to='/species' activeclassname='activeLink'>Species</NavLink>
                <NavLink className='link' to='/getinvolved' activeclassname='activeLink'>Get Involved</NavLink>
                <NavLink className='link' to='/about' activeclassname='activeLink'>About Us</NavLink>
                <NavLink className='link' to='/marine_areas' activeclassname='activeLink'>Marine Areas</NavLink>
            </div>
        </div>  
    );
}

export { NavBar };