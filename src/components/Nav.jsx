import React from 'react'
import {Link} from 'react-router-dom'


 function Nav (props){
  return (
    <div className="nav">
      <Link to="/currencies">
        <div>Popular Crypto</div>
      </Link>
      <Link to="/stocks/:symbols">
        <div>Popular Stocks</div>
      </Link>
      <Link to="/">
        <div>Crypto Prices</div>
      </Link>
      <Link to="/Stocks">
        <div>Current Stocks</div>
      </Link>
      
    </div>
  );
};
export default Nav