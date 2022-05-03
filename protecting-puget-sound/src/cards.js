import React from 'react'

function Cards(props) {
  return (
      <div className='card'>
        <div className='card_body'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/330px-Salmo_salar.jpg' class='card_img'/>
          <h2 className='card_title'>Salmon</h2>
        </div>
        <button className='card_button'>View Fish</button>
      </div>

  )

}
export {Cards}