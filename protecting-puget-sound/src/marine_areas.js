import React from 'react';
import {Cards} from './marine_cards.js'


function MarineAreasPage () {
  return (
    <div>
    <header>
      <h1 class = 'top-specie'>Marine Areas in Puget Sound</h1>
      <p class = 'explain'>Select a marine area below to learn more about it.</p>

    </header>

      <div className='card_container'>
      <Cards
          img = "https://www.eregulations.com/assets/images/books/wafw/21wafw/27.jpg"
          name = "Marine Area 5"
        />
      <Cards
          img = "https://www.ptleader.com/uploads/original/20200617-093736-marine_area_6%20with%20discovery%20bay.jpg"
          name = "Marine Area 6"
        />
        <Cards
          img = "https://wdfw.wa.gov/sites/default/files/styles/page_body_full_width/public/2019-03/ma7_shrimpareas.jpg?itok=CFSZTMGW"
          name = "Marine Area 7"
        />
        <Cards
          img = "https://www.eregulations.com/assets/images/books/wafw/21wafw/Marine_-_Area08-1.jpg"
          name = "Marine Area 8-1"
        />
        <Cards
          img = "https://www.eregulations.com/assets/images/books/wafw/21wafw/Marine_-_Area08-2_revised_4-28-21.jpg "
          name = "Marine Area 8-2"
        />
        <Cards
          img = "https://s.www.wikirecreation.com/locations/image/5/4/4/e/544e31fa32650be4115cf717def6e018.jpg"
          name = "Marine Area 9"
        />
      <Cards
        img ="https://www.eregulations.com/assets/images/books/wafw/21wafw/Marine_-_Area10_4-28-21.jpg"
        name = "Marine Area 10"
        />
        <Cards
          img = "https://www.eregulations.com/assets/images/books/wafw/21wafw/Marine_-_Area11.jpg "
          name = "Marine Area 11"
        />
        <Cards
          img = "https://www.eregulations.com/assets/images/books/wafw/21wafw/area12-Map.png"
          name = "Marine Area 12"
        />
        <Cards
          img = "https://www.eregulations.com/assets/images/books/wafw/21wafw/Marine_-_Area13.jpg"
          name = "Marine Area 13"/>

      </div>

      <footer>

      </footer>
    </div>

  )
}
export {MarineAreasPage}




