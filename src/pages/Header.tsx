import burger from '../assets/burger.png';
import point from '../assets/point.png';
import logo from '../assets/logo.svg';
import call from '../assets/call.png';
import basket from '../assets/basket.svg';
import search from '../assets/search.svg';
import React from 'react';


function Header() {
    return (
        <header className='header'>
        <button  className="burger">
          <img src={burger} alt="" />
        </button>
        <div className="burger__title">
        <h3 className='burger__inner'>All collection</h3>
        </div>
        <div  className="point">
          <button className='point__inner'>
          <img src={point} alt="" />
          </button>
          <h4 className="point_title">Georgia</h4>
        </div>
        <button className="logo">
          <img src={logo} alt="" />
        </button>
        <div className="call">
          <img src={call} alt="" />
          <h4 className="call_title">8 800 000 00</h4>
          <p className="call_inner">free delivery</p>
        </div>
        <button  className="basket">
          <img src={basket} alt="" />
        </button>
        <button  className="search">
          <img src={search} alt="" />
        </button>
      </header>
    )
}

export default Header;