import React from 'react'

function Cards(props) {
  return (
      <div className='card'>
        <div className='card_body'>
          <img src={props.image} class='card_img'/>
          <h2 className='card_title'>{props.name}</h2>
        </div>
        <button className='card_button'>View Marine Area</button>
      </div>

  )

}