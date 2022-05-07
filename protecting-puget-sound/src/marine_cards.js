import React from 'react'

function Cards(props) {
  return (
      <div className='card'>
        <div className='card_cont'>
          <img src='https://www.eregulations.com/assets/images/books/wafw/21wafw/Marine_-_Area11.jpg' class='card_img'/>
            <div className = 'card_title'>              
              <h1>Marine Areas</h1>
        </div>
        <button className='card_button'>View Marine Area</button>
      </div>
    </div>

  )

}

export {Cards}