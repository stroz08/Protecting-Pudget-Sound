import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div id='navbar'>
            <NavLink className='header' to='/'><h1> Protecting Puget Sound </h1></NavLink>
            <div className='link-container'>
                <NavLink className='link' to='/' activeclassname='activeLink'>Home</NavLink>
                <NavLink className='link' to='/species' activeclassname='activeLink'>Species</NavLink>
                <NavLink className='link' to='/marine_areas' activeclassname='activeLink'>Marine Areas</NavLink>
                <NavLink className='link' to='/getinvolved' activeclassname='activeLink'>Get Involved</NavLink>
                <NavLink className='link' to='/About_Us' activeclassname='activeLink'>About Us</NavLink>
            </div>
        </div>
    );
}

export { NavBar };