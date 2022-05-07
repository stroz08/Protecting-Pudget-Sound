import './App.css';
import React from 'react';
import { NavBar } from './common/NavigationBar'
import { SpeciesPage } from './SpeciesPage'
import { Route, Routes } from 'react-router-dom'
import { Fish_Details } from './fish_details'


function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <Routes>
        <Route path='/species' element={<SpeciesPage/>}></Route>
        <Route path='/fish_details' element={<Fish_Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
