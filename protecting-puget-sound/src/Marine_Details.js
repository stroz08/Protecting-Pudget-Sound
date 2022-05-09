import React from 'react'


function Marine_Details(props) { //Does this need to take in props?
    return (
        <div className='format'>
            <h1>Marine Area</h1>
        <section>
            <h2>Marine Area Description</h2>
            <p>Describing the marine area</p>
            <h2>Legal Boundaries</h2>
            <p>Describe legal boundaries here</p>
            <img src='https://www.eregulations.com/assets/images/books/wafw/21wafw/Marine_-_Area11.jpg' class='card_img'/>
        </section>
        </div>

    )
}
export { Marine_Details }