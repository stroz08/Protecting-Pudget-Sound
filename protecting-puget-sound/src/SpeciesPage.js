import React from 'react';
import {Cards} from './cards.js'

function SpeciesPage() {
    return (
      <div>
      <header>
        <h1>Species in Puget Sound</h1>
        <p>Here are the most common fish found in Puget Sound. Click on the checkout specie button to learn more about the specific specie. </p>
      </header>
        <div className='card_container'>
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
        <Cards/>
        <Cards/>
        </div>
        <footer>

        </footer>
      </div>
    )
  }
export { SpeciesPage }