import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import { Routes, Route } from 'react-router-dom';
import Coin from './routes/Coin';



import './components/Pagination.css';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Coins/>} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/coin/:coinID" element={<Coin />} />
      </Routes>

    </>
  );
}

export default App;
