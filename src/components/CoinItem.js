import React, {useState, useEffect} from 'react';
import './Coins.css';

const CoinItem = (props) => {

  const [priceChangeColor, setPriceChangeColor] = useState('');

  useEffect(() => {
    // Update the color based on the price change percentage
    const priceChangePercentage = props.coins.price_change_percentage_24h.toFixed(2);
    if (priceChangePercentage < 0) {
      setPriceChangeColor('red');
    } else {
      setPriceChangeColor('#69ff00');
    }
  }, [props.coins.price_change_percentage_24h]);


  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt=""/>
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p style={{ color: priceChangeColor }}>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem