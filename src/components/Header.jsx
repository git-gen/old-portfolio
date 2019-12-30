import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css';

const Header = () => {

  return (
    <div className="header-container">
      <Link to='/'>
        <div className="header-link">
          <p>Home</p>
        </div>
      </Link>
      <Link to='/about'>
        <div className="header-link">
          <p>About</p>
        </div>
      </Link>
      <Link to='/skill'>
        <div className="header-link">
          <p>Skill</p>
        </div>
      </Link>
      <Link to='/works'>
        <div className="header-link">
          <p>Works</p>
        </div>
      </Link>
    </div>
  );
}

export default Header
