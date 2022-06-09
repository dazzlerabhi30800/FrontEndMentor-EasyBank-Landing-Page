import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Network from './Components/Network'
import Features from './Components/Features'

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Network />
      <Features />
    </div>
  );
}

export default App;
