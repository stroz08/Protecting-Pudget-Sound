import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {database} from './Firebase.js'
import {ref, get, child} from 'firebase/database'


function Marine_Details(props) { //Does this need to take in props?

  const [state, setState] = useState(0);

  const location = useLocation()
  const {name} = location.state
  var dbRef = ref(database)

  if (state === 0) {
    get(child(dbRef, 'marines/'+ name)).then((snapshot) => {
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
            <h1>{name}</h1>
        <section class = "fish-info">
            <img src={state && state.img} class='card_img'/>
            <h2>Puget Sound Area: {state && state.area} </h2>
            <p>About the area: {state && state.info}</p>
            <h2>Fishing Rules: {state && state.fish}</h2>
        </section>
        </div>

    )
}
export { Marine_Details }