import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Hero.css'
import Btc from "../images/bitcoin.png";
import Eth from "../images/ethereum.png";
import { Link } from 'react-router-dom';

const Hero = () => {

    const [data, setData] = useState([])

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Error!");
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [url]);
    
    console.log(data);

    const getPercentageColor = (percentage) => {
        return percentage < 0 ? 'red' : '#69ff00';
    };
    

  return (
    <div className='container-hero'>
        <div>
            <div className='header-hero'>
                <img className="btc-float" src={Btc} alt="floating-el" />
                <h1>TRACK AND TRADE <br /> <span className='hero-gradient'>CRYPTO CURRENCIES</span></h1>
                <img className="eth-float" src={Eth} alt="floating-el" />
            </div>
            <div className='container-feature'>
                {data.map((item) => (
                    <Link to={`/coin/${item.id}`} key={item.id} className="featured-style">
                        <img src={item?.image} alt="coin-img" className='featured-image'/>
                        <p className="slider-coin__name">
                            {item?.name}{" "}
                            <span style={{ color: getPercentageColor(item?.price_change_percentage_24h) }}>
                                {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                            </span>
                        </p>
                        <p className="slider-coin__price">
                            {"$ " + item.current_price?.toFixed(2)}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hero