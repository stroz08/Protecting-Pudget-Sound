import './App.css';
import React from 'react';
import { NavBar } from './common/NavigationBar'
import {MarineAreasPage} from './marine_areas.js';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <Routes>
          <Route path='/marine_areas' element={<MarineAreasPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
