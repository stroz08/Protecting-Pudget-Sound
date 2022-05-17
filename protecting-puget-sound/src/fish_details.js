import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {database} from './Firebase.js'
import {ref, get, child} from 'firebase/database'


function Fish_Details() {

  const [state, setState] = useState(0);

  const location = useLocation()
  const {name} = location.state
  var dbRef = ref(database)

  if (state === 0) {
    get(child(dbRef, 'fishes/'+ name)).then((snapshot) => {
      if (snapshot.exists()) {
        setState(snapshot.val())
      } else {
        console.log("No Data Available")
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
      <div className='format'>
        <h1 class = "top">{name}</h1>
        <h2 class = "danger">Species Endangerment Level: </h2>
        <img class = "main-fish" src={state && state.img}/>
      <section class = "fish-info">
        <h2>Main Facts</h2>
        <ul>
          <li>Located in Marine Areas: </li>
          <li>Lifespan: {state && state.life}</li>
          <li>Average Length: {state && state.length}</li>
          <li>Average weight: {state && state.weight}</li>
        </ul>
        <h2>Fish Description</h2>
        <p>Fish Detail here</p>
        </section>
      </div>
  )

}
export { Fish_Details }
