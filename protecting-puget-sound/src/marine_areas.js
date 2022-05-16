import React from 'react'
import {Cards} from './marine_cards.js'

function MarineAreasPage () {
  return (
    <div>
    <header>
      <h1>Marine Areas in Puget Sound</h1>
      <p>Select a marine area below to learn more about it.</p>

    </header>

      <div className='card_container'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

      </div>

      <footer>

      </footer>
    </div>

  )
}
export {MarineAreasPage}




