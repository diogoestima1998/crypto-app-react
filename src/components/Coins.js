import React from 'react';
import CoinItem from './CoinItem';
import './Coins.css';
import {Link} from 'react-router-dom';
import Coin from '../routes/Coin';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';


const Coins = (props) => {
    
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

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
                            <CoinItem coins={coins}/>
                        </Link>
                    )
                })}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Coins