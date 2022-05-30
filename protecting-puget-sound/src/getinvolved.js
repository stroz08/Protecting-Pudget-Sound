import React from 'react'

function Get_Involved(props) {
    return (
        <div>
          <header>
          <h1 class = "top-specie">Get Involved</h1>
        </header>
          <h2 class = 'medium'>Why Become Involved</h2>
          <p class = "mission">Puget Sound fish stocks have been in near continual decline for decades, with few showing potential for recovery (State of Salmon, 2020).
          Many factors such as habitat loss, river dams and uncertain ocean conditions continue to negatively impact fish stocks, yet there are still important steps that individual anglers can take.
          Below are some of our favorite resources through which every individual can make a difference.
          </p>
          <h2>Petition</h2>
                <ul className='alignBullets'>
                    <li><a href= "https://www.change.org/p/washington-department-of-fish-and-wildlife-protect-puget-sound-juvenile-steelhead">Protect Puget Sound Juvenile Steelhead</a></li>
                    <li><a href= "https://www.oursound-oursalmon.org/taking-back-our-sound-petition#taking-back-our-sound-petition2">Take Back our Sound</a></li>
                </ul>
            <h2>Donate</h2>
            <ul className='alignBullets'>
                <li><a href= "https://lltk.org/donate/">Give to Save Salmon</a></li>
                <li><a href= "https://lltk.org/donations/provide-sustainable-fishing-in-the-san-juans/">Ensure Fishing in the Puget Sound</a></li>
                <li><a href= "https://www.earthcorps.org/field-initiatives/protect-puget-sound/">Protect Puget Sound</a></li>
            </ul>
      <footer>
        <h2 class = 'area'>
          Citations:
        </h2>
        <p>
            https://stateofsalmon.wa.gov/
        </p>
      </footer>
      </div>
      )
  }
export { Get_Involved }