import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navgtn from './components/Navgtn';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navgtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
