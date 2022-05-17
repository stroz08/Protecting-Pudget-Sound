import React from 'react'
import { Link } from 'react-router-dom'

function Cards(props) {

  return (
      <div className='card'>
       <div className='card_cont'>
        <img src = { props.img } class='card_img'/>
          <div className = 'card_title'>
              <h1>{props.name}</h1>
          </div>
       </div>
        <div className='button'>
          <Link className='fish' to= '/fish_details'state = {{name:props.name}} activeclassname='activeLink'>Checkout Fish</Link>
        </div>
      </div>
  )
}

export {Cards}