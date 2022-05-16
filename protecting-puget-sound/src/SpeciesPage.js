import React from 'react';
import {Cards} from './cards.js'

import { getDatabase, ref } from 'firebase/database';

// Get a reference to the database service
const db = getDatabase();

const fishRef = ref(db, "Fishes");
console.log(fishRef)

function SpeciesPage() {
    return (
      <div>
      <header>
        <h1 class = 'top'>Species in Puget Sound</h1>
        <p class = 'explain'>Here are the most common fish found in Puget Sound. Click on the checkout specie button to learn more about the specific specie. </p>
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