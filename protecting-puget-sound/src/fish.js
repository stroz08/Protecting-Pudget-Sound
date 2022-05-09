import React from 'react'

function Fish(props) {
  return (
    <div>
      <div>
        <h2 class='endanger'>Endanger Level</h2>
        <img src={props.danger} class='card_img'/>
      </div>
      <h1>props.name</h1>
      <div className='fish_img'>
          <img src={props.image} class='card_img'/>
      </div>
      <p>props.descrip</p>
    </div>
  )

}