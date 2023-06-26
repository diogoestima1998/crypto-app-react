import React, { useState, useRef } from 'react';
import {FaCoins} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {ReactComponent as Hamburger} from '../images/Hamburger.svg'


function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const linkRef = useRef(null);

/*   const handleButtonClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  }; */

  return (
    <>
      <div className='container'>
        <div className='navbar-container-desktop'>
          <Link to='/'>
              <div className='navbar'>
                  <FaCoins className="icon"/>
                  <h1> Crypto <span className='yellow'>Guru</span></h1>
              </div>
          </Link>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a ref={linkRef} href="#market">Market</a>
                </li>
                <li>
                  <a ref={linkRef} href="#choose">Choose Us</a>
                </li>
                <li>
                <a ref={linkRef} href="#join">Join</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar



