
import './App.css';
import React from 'react';
import { NavBar } from './common/NavigationBar'
import { Route, Routes } from 'react-router-dom'
import { About_Page } from './About_Us'
import {MarineAreasPage} from './marine_areas.js';
import {Route, Routes} from 'react-router-dom';
import { Marine_Details } from './Marine_Details'

function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <Routes>
        <Route path='/About_Us' element={<About_Page/>}></Route>
         <Route path='/marine_areas' element={<MarineAreasPage/>}></Route>
         <Route path='/marine_details' element={<Marine_Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;