import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, animated } from 'react-spring/renderprops';
import styled from 'styled-components';
import Header from './components/Header';
import Index from './pages/Index';
import About from './pages/About';
import Skill from './pages/Skill';
import Works from './pages/Works';

const Container = styled(animated.div)`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  min-width: 340px;
`;

const AnimatedRoute = ({ children }) => (
  <Route
    render={({ location }) => (
      <Transition
        native
        items={location}
        keys={location => location.pathname}
        from={{ opacity: 0, transform: 'perspective(900px) rotateY(180deg)' }}
        enter={{ opacity: 1, transform: 'perspective(900px) rotateY(0deg)' }}
        leave={{ opacity: 0, transform: 'perspective(900px) rotateY(-180deg)', pointerEvents: 'none' }}>
        {location => style => <Container style={style}>{children(location)}</Container>}
      </Transition>
    )}
  />
)

const Routes = () => {
  return (
    <Router>
      <Header />
      <AnimatedRoute>
        {location => (
          <Switch>
            <Route exact path='/' render={props => <Index />} />
            <Route path='/about' render={props => <About />} />
            <Route path='/skill' render={props => <Skill />} />
            <Route path='/works' render={props => <Works />} />
            <Route exact render={props => <Index />} />
          </Switch>
        )}
      </AnimatedRoute>
    </Router>
  )
}
export default Routes
