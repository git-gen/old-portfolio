import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Profile from './pages/Profile';
import Skill from './pages/Skill';
import Works from './pages/Works';
import Contact from './pages/Contact';

const index = () => <Index />
const profile = () => <Profile />
const skill = () => <Skill />
const works = () => <Works />
const contact = () => <Contact />

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={index} />
        <Route path='/profile' exact component={profile} />
        <Route path='/skill' exact component={skill} />
        <Route path='/works' exact component={works} />
        <Route path='/contact' exact component={contact} />
        <Route exact component={index} />
      </Switch>
    </Router>
  )
}

export default Routes
