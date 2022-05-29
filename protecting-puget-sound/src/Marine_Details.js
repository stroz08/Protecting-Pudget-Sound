import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {database} from './Firebase.js'
import {ref, get, child} from 'firebase/database'


function Marine_Details(props) { //Does this need to take in props?

  const [state, setState] = useState(0);

  const navigate = useNavigate()
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
            <i onClick={() => navigate(-1)} class="arrow left"></i>
            <h1 class = "top">{name}</h1>
            <img class = "main-map" src={state && state.img} />
        <section>
            <h2 className="top">Puget Sound Area: </h2>
            <ul>{state && state.area} </ul>
            <h1 className='fish-des'>About the area: </h1>
            <li className='descr'>{state && state.info}</li>
            <h1 className='fish-des'>Fishing Rules: </h1>
            <li className='descr'>{state && state.fish}</li>
        </section>
        <footer>

        </footer>
        </div>

    )
}
export { Marine_Details }