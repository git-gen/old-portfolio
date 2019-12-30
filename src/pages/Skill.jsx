import React from 'react';
import './../App.css';
import Header from '../components/Header';
import Title from '../components/Title';

const Skill = () => (
  <div>
    <Header />
    <Title text={'Skill'} />
    <div className="page-title"><span>Skill</span></div>
    <div className="skill-main-padding">
      <div className="skill-main-container">
        <div className="skill-main-title">Backend</div>
        <div className="skill-main-item">Ruby on Rails</div>
        <div className="skill-main-rating"></div>

        <div className="skill-main-title">Frontend</div>
        <div className="skill-main-item">HTML・CSS</div>
        <div className="skill-main-rating"></div>
        <div className="skill-main-item">JavaScript</div>
        <div className="skill-main-rating"></div>
        <div className="skill-main-item">jQuery</div>
        <div className="skill-main-rating"></div>
        <div className="skill-main-item">React</div>
        <div className="skill-main-rating"></div>
        <div className="skill-main-item">Backbone.js</div>
        <div className="skill-main-rating"></div>

        <div className="skill-main-title">Other</div>
        <div className="skill-main-item">SQL</div>
        <div className="skill-main-rating"></div>
        <div className="skill-main-item">Nginx</div>
        <div className="skill-main-rating"></div>
        <div className="skill-main-item">Git</div>
        <div className="skill-main-rating"></div>

      </div>
    </div>
  </div>
)

export default Skill
