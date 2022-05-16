import React from 'react'

function Fish_Details(props) {
  return (
      <div className='format'>
        <h1>Species Name</h1>
        <h2>Species Endangerment Level: </h2>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/330px-Salmo_salar.jpg'/>
      <section>
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
