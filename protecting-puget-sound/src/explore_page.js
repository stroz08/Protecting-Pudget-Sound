import React from 'react'
import { Link } from 'react-router-dom'


function Explore() {
  return (
    <div>
    <h1 className='top'>Explore Page</h1>
  <h3 className='explain'>Learn more about species and marine areas by</h3>
<div className="squares">
      <div className="icon1">
        <Link className='links' to='/species' activeclassname='activeLink'>Species</Link>
      </div>
      <div className="icon2">
         <Link className='links' to='/marine_areas' activeclassname='activeLink'>Marine Areas</Link>
     </div>
  </div>
    </div>
    )
  }
export { Explore }