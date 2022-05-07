
import './App.css';
import React from 'react';
import { NavBar } from './common/NavigationBar'
import { Route, Routes } from 'react-router-dom'
import { About_Page } from './About_Us'




function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <Routes>
        <Route path='/About_Us' element={<About_Page/>}></Route>
      </Routes>
    </div>
  );
}

export default App;