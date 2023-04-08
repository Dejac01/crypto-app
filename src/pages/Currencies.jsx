import React from 'react'

import { Link } from "react-router-dom";

 function Currencies (props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (

    <div className="currencies">
      <h1>Crypto</h1> 
      {currencies.map((coin,key) => {
        const { name, symbol } = coin;

        return (
          <Link key={key}to={`https://crypto.com/price`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
   


</div>
  );
};
export default Currencies