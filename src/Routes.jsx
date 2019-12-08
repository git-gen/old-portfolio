import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Skill from './pages/Skill';
import Works from './pages/Works';

const index = () => {
  return (
    <Index />
  );
}
const about = () => {
  return (
    <About />
  );
}
const skill = () => {
  return (
    <Skill />
  );
}
const works = () => {
  return (
    <Works />
  );
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={index} />
        <Route path='/about' exact component={about} />
        <Route path='/skill' exact component={skill} />
        <Route path='/works' exact component={works} />
        <Route exact component={index} />
      </Switch>
    </Router>
  )
}

export default Routes
