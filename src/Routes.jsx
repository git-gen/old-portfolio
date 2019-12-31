import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Skill from './pages/Skill';
import Works from './pages/Works';

const index = () => {
  return (
    <div>
      <Header />
      <Title text={'Home'} />
      <Index />
    </div>
  );
}
const about = () => {
  return (
    <div>
      <Header />
      <Title text={'About'} />
      <About />
      <Footer />
    </div>
  );
}
const skill = () => {
  return (
    <div>
      <Header />
      <Title text={'Skill'} />
      <Skill />
      <Footer />
    </div>
  );
}
const works = () => {
  return (
    <div>
      <Header />
      <Title text={'Works'} />
      <Works />
      <Footer />
    </div>
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
