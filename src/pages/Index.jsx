import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './../App.css';

const Index = () => {

  return (
    <div>
      <div className="page-title"><span>Home</span></div>
      <div className="home-main-padding">
        <div className="home-main-container">
          <Link to='/about'>
            <div className="home-main-about">
              <span className="home-main-text">About</span>
            </div>
          </Link>
          <Link to='/skill'>
            <div className="home-main-skill">
              <span className="home-main-text">Skill</span>
            </div>
          </Link>
          <Link to='/works'>
            <div className="home-main-works">
              <span className="home-main-text">Works</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index
