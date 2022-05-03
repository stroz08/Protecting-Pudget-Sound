import './App.css';
import React from 'react';
import { NavBar } from './common/NavigationBar'
import {Cards} from './Cards.js'

function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  );
}

export default App;
