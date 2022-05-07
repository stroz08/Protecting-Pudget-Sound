import React from 'react'
import { Link } from 'react-router-dom'

function Cards(props) {
  return (
      <div className='card'>
       <div className='card_cont'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/330px-Salmo_salar.jpg' class='card_img'/>
          <div className = 'card_title'>
              <h1>Fish</h1>
          </div>
       </div>
        <div>
          <Link className='fish' to='/fish_details' activeclassname='activeLink'>Checkout Fish</Link>
        </div>
      </div>
  )
}
export {Cards}