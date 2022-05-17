import React from 'react'
import {Link} from 'react-router-dom'

function Cards(props) {
  return (
      <div className='card'>
        <div className='card_cont'>
          <img src= {props.img} className = 'card_img'/>
            <div className = 'card_title'>
              <h1>{props.name}</h1>
        </div>
        </div>
        <div className='button'>
        <Link className='fish' to= '/Marine_Details' state = {{name:props.name}} activeclassname='activeLink'>Checkout Marine Area</Link>
      </div>
    </div>

  )

}

export {Cards}