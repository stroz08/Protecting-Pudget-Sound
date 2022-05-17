import React from 'react';
import {Cards} from './cards.js'



function SpeciesPage() {

    return (
      <div>
      <header>
        <h1 class = 'top-specie'>Species in Puget Sound</h1>
        <p class = 'explain'>Here are the most common fish found in Puget Sound. Click on the fish to learn more about the specific specie. </p>
      </header>
        <div className='card_container'>
        <Cards
        img ="https://wdfw.wa.gov/sites/default/files/styles/half_width_slide/public/2019-03/cabezon_vicky_okimura.jpg?itok=MovFCfpT"
        name = "Cabezon"
        />
        <Cards
          img = "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-chinook-salmon.png?itok=s7wokwso"
          name = "Chinook Salmon"
        />
        <Cards
          img = "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-chum-salmon.png?itok=qCzbnMNa"
          name = "Chum Salmon"
        />
        <Cards
          img = "https://www.nps.gov/glba/learn/nature/images/CoastalCutthroat.png"
          name = "Coastal Cutthroat Trout"/>
        <Cards
          img = "https://wildsalmoncenter.org/wp-content/uploads/2020/02/kspencer_coho.jpg"
          name = "Coho Salmon"
        />

        <Cards
          img = "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/lingcod.png?itok=YjRaKU-q"
          name = "Lingcod"
        />
        <Cards
          img = "https://17idjc2mjkuw17g32z1ivim6-wpengine.netdna-ssl.com/wp-content/uploads/alaskan-halibut-2.png"
          name = "Pacific Halibut"
        />
        <Cards
          img = "https://media.fisheries.noaa.gov/styles/original/s3/2021-01/640x427-Herring_Pacific_NB_W.jpg?itok=9tj5MSZs"
          name = "Pacific Herring"
        />
        <Cards
          img = "https://www.fishbase.se/images/thumbnails/gif/tn_Trsym_u1.gif"
          name = "Pacific Jack Mackerel"
        />
        <Cards
          img = "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-pink-salmon.png?itok=WBIjRwIO"
          name = "Pink Salmon"
        />
        <Cards
          img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91E_rzLATqX_DH-EYvPIYpDJNHzyAR8Ca1w&usqp=CAU"
          name = "Pacific Sand Lance"
        />

        <Cards
          img = "https://www.eregulations.com/assets/images/books/wafw/21wafw/marine_-_Yelloweye_RF_02.jpg"
          name = "Rockfish"
        />
        <Cards
          img = "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-sockeye-salmon.png?itok=v07l1FzV"
          name = "Sockeye Salmon"
        />
        <Cards
          img = "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-steelhead-trout.png?itok=LLXZDCqN"
          name = "Pacific Steelhead"
        />


        </div>
        <footer>

        </footer>
      </div>
    )
  }
export { SpeciesPage }