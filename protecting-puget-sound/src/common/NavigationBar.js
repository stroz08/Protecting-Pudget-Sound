import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div id='navbar'>
             <img class="logo" src={require('../logo.jpg')}/>
            <NavLink className='header' to='/'><h1> Protecting Puget Sound </h1></NavLink>
            <div className='link-container'>
                <NavLink className='link' to='/' activeclassname='activeLink'>Home</NavLink>
                <NavLink className='link' to='/explore_page' activeclassname='activeLink'>Explore</NavLink>
                <NavLink className='link' to='/getinvolved' activeclassname='activeLink'>Get Involved</NavLink>
                <NavLink className='link' to='/About_Us' activeclassname='activeLink'>About Us</NavLink>
            </div>
        </div>
    );
}

export { NavBar };