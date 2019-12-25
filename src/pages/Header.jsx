import React from 'react';
import './../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <div className="header-padding">
    <div className="header-container">
      <Link to='/'>
        <div className="header-link"><p>Home</p></div>
      </Link>
      <Link to='/about'>
        <div className="header-link"><p>About</p></div>
      </Link>
      <Link to='/skill'>
        <div className="header-link"><p>Skill</p></div>
      </Link>
      <Link to='/works'>
        <div className="header-link"><p>Works</p></div>
      </Link>
    </div>
  </div>
)

export default Header
