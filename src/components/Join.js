import React from 'react'
import Btc from "../images/bitcoin.png";
import Eth from "../images/ethereum.png";
import './Join.css'

const Join = () => {

  const handleButtonClick = () => {
    window.open('https://discord.com/', '_blank');
  };

  return (
    <>
     <div id="join" className='container-join'>
        <div>
            <div className='join-hero'>
                <img className="btc-float" src={Btc} alt="floating-el" />
                <h1 className='header-join'>JOIN US VIA <br /> <span className='join-gradient'>DISCORD</span></h1>
                <img className="eth-float" src={Eth} alt="floating-el" />
            </div>
            <div className='join-text'>
                <p>Invest and manage all your crypto at one place.</p>
                <button onClick={handleButtonClick} className='yellowButton'>Join via Discord</button>
            </div>
            {/* <a className='yellowButton' rel="noreferrer" target="_blank" href="https://discord.com/">Join via Discord</a> */}
        </div>
    </div>
    </>
  )
}

export default Join