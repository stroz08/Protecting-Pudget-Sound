import './App.css';
import React from 'react';
import { NavBar } from './common/NavigationBar'
import { Route, Routes } from 'react-router-dom'
import { RenderMap } from './Map.js'

function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <Routes>
        <Route path="/" element={<RenderMap/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
