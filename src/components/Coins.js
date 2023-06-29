import React, { useState, useEffect } from 'react';
import CoinItem from './CoinItem';
import './Coins.css';
import {Link} from 'react-router-dom';
import Coin from '../routes/Coin';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import Join from './Join';
import Choose from './Choose';


const Coins = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [coins, setCoins] = useState([]);

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
        <Navbar />
        <Hero/>
        <div id="market" className='container'>
            <h1 className='coins-header'>Crypto Prices:</h1>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {coins.map((coin) => {
                    return (
                        <Link to={`/coin/${coin.id}`} element={<Coin/>} key={coin.id}>
                            <CoinItem coins={coin}/>
                        </Link>
                    )
                })}
            </div>
            <div className="pagination">
                <button className='pagination__button' onClick={goToPreviousPage} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={FaArrowLeft} style={{color: "aliceblue"}} />
                &nbsp;
                Previous
                </button>
                <span className='textpagination'>Page {currentPage}</span>
                <button className='pagination__button' onClick={goToNextPage} disabled={currentPage === totalPages}>
                Next
                &nbsp;
                <FontAwesomeIcon icon={FaArrowRight} style={{color: "aliceblue",}} />
                </button>
            </div>
        </div>
        <Choose/>
        <Join/>
        <Footer/>
    </>
  )
}

export default Coins