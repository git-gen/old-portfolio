import React from 'react';
import './../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Works = () => (
  <div>
    <div><Link to='/'>Index</Link></div>
    <div><Link to='/profile'>Profile</Link></div>
    <div><Link to='/skill'>Skill</Link></div>
    <div><Link to='/works'>Works</Link></div>
    <div><Link to='/contact'>Contact</Link></div>
  </div>
)

export default Works
