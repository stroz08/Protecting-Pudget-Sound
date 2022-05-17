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
        <img class = "main-fish" src={state && state.img}/>
      <section>
        <h2 class="top">Main Facts</h2>
        <ul>
          <li>Endgerment Level:  {state && state.danger} </li>
          <li>Average Length:  {state && state.length}</li>
          <li>Average weight:  {state && state.weight}</li>
          <li>Lifespan:  {state && state.life}</li>
        </ul>
        <h2 className='fish-des'>Fish Description: </h2>
        <li className='descr'>{name} Locations:  {state && state.range}</li>
        <li className='descr'>Fish Description: {state && state.descr}</li>
        <p className='memo'>**Fish endangerment is ranked on a scale from 1-3, 1 being not endangerment and 3 being can not fish**</p>
        </section>
        <footer>
        </footer>
      </div>
  )

}
export { Fish_Details }
