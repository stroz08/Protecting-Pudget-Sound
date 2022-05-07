import './App.css';
import React from 'react';
import { NavBar } from './common/NavigationBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <Routes>
        <Route path='/species' element={<SpeciesPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
