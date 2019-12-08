import React from 'react';
import './../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <div>
    <div className="header-container">
      <div className="header-link"><Link to='/'>Home</Link></div>
      <div className="header-link"><Link to='/about'>About</Link></div>
      <div className="header-link"><Link to='/skill'>Skill</Link></div>
      <div className="header-link"><Link to='/works'>Works</Link></div>
    </div>
  </div>
)

export default Header
