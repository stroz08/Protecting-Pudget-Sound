import React from 'react';
import {Cards} from './cards.js'
import { database } from './Firebase.js'
import { ref, get, child } from 'firebase/database'


function SpeciesPage() {

    return (
      <div>
      <header>
        <h1 class = 'top'>Species in Puget Sound</h1>
        <p class = 'explain'>Here are the most common fish found in Puget Sound. Click on the checkout specie button to learn more about the specific specie. </p>
      </header>
        <div className='card_container'>
        <Cards
        img ="https://wdfw.wa.gov/sites/default/files/styles/half_width_slide/public/2019-03/cabezon_vicky_okimura.jpg?itok=MovFCfpT"
        name = "Cabezon"
        />
        <Cards
          img = "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-chinook-salmon.png?itok=s7wokwso"
          name = "Chinook Salmon"
        />
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

        <Cards/>
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
export { SpeciesPage }