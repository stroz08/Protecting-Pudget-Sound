import React from 'react'
import { Link } from 'react-router-dom'

function Explore() {
  return (
    <div >
    <h1 className='top'>Explore Page</h1>
  <h3 className='explain'>Learn more about species and marine areas by clicking on boxes below</h3>
  <div class = 'sides'>
    <div className="squares">
    <Link className='links' to='/species' activeclassname='activeLink'>
          <Link  to='/species' activeclassname='activeLink'>
          <img className='boxes' src='https://sm.mashable.com/t/mashable_in/photo/default/f_dm9b.1248.jpg'/></Link>
          <div className='words'>Species</div>
      </Link>
    </div>
    <div className="squares">
        <Link className='links' to='/marine_areas' activeclassname='activeLink'>
          <Link  to='/marine_areas' activeclassname='activeLink'>
          <img className='boxes' src='https://i0.wp.com/pugetsoundestuarium.org/wp-content/uploads/2020/07/Puget-Sound-Map.jpg?fit=800%2C571&ssl=1'/></Link>
          <div className='words'>Marine Areas</div>
      </Link>
    </div>
</div>
<footer>
        <h2 class = 'area'>
         
        </h2>
        <p>
            
        </p>
      </footer>
  </div>
  )

}
export { Explore }