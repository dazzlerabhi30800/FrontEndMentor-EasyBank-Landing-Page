import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Network from './Components/Network'
import Features from './Components/Features'
import Article from './Components/Article';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Network />
      <Features />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
