
import './App.css';
import React from 'react';
import { NavBar } from './common/NavigationBar'
import { SpeciesPage } from './SpeciesPage'
import { Route, Routes } from 'react-router-dom'
import { RenderMap } from './Map.js'
import { Fish_Details } from './fish_details'
import { About_Page } from './About_Us'
import {MarineAreasPage} from './marine_areas.js';
import { Marine_Details } from './Marine_Details'
import { Get_Involved } from './getinvolved'





function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <Routes>
        <Route path="/" element={<RenderMap/>}></Route>
        <Route path='/species' element={<SpeciesPage/>}></Route>
        <Route path='/fish_details' element={<Fish_Details/>}></Route>
        <Route path='/About_Us' element={<About_Page/>}></Route>
        <Route path='/marine_areas' element={<MarineAreasPage/>}></Route>
        <Route path='/marine_details' element={<Marine_Details/>}></Route>
        <Route path='/getinvolved' element={<Get_Involved/>}></Route>

      </Routes>
    </div>
  );
}

export default App;