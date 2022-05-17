import React from 'react'
import { useLocation } from 'react-router-dom'

function Fish_Details() {
  const location = useLocation()
  const {name} = location.state
  console.log(name)
  return (
      <div className='format'>
        <h1 class = "top">Species Name</h1>
        <h2 class = "danger">Species Endangerment Level: </h2>
        <img class = "main-fish" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/330px-Salmo_salar.jpg'/>
      <section class = "fish-info">
        <h2>Main Facts</h2>
        <ul>
          <li>Located in Marine Areas: </li>
          <li>Lifespan: </li>
          <li>Average Length</li>
          <li>Average weight</li>
        </ul>
        <h2>Fish Description</h2>
        <p>Fish Detail here</p>
        </section>
      </div>
  )
}
export { Fish_Details }
