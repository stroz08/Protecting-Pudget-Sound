import React from 'react'
import {Link} from 'react-router-dom'

function Cards(props) {
  return (
      <div className='card'>
        <div className='card_cont'>
          <img src='https://www.eregulations.com/assets/images/books/wafw/21wafw/Marine_-_Area11.jpg' class='card_img'/>
            <div className = 'card_title'>              
              <h1>Marine Areas</h1>
        </div>
        </div>
        <div className='button'>
        <Link className='fish' to='/Marine_Details' activeclassname='activeLink'>Marine Area Detail</Link>
      </div>
    </div>

  )

}

export {Cards}