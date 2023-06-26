import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import { Routes, Route } from 'react-router-dom';
import Coin from './routes/Coin';

import './components/Pagination.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${currentPage}&sparkline=false&locale=en`;
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        setTotalPages(Math.ceil(response.headers['total'] / response.headers['per-page']));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/coin/:coinID" element={<Coin />} />
      </Routes>
      {/* <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faArrowLeft} style={{color: "aliceblue",}} />
        &nbsp;
          Previous
        </button>
        <span className='textpagination'>Page {currentPage}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
          &nbsp;
        <FontAwesomeIcon icon={faArrowRight} style={{color: "aliceblue",}} />
        </button>
      </div> */}
    </>
  );
}

export default App;
