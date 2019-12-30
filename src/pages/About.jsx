import React from 'react';
import './../App.css';
import Header from '../components/Header';
import Title from '../components/Title';

const About = () => {

  return (
    <div>
      <Header />
      <Title text={'About'} />
      <div className="page-title"><span>About Me</span></div>
      <div className="about-main-padding">
        <div className="about-main-container">
          <div className="about-main-image-parent">
            <div
              className="about-main-image"
            />
          </div>
          <div className="about-main-title">Developer Genki</div>
          <div className="about-main-text">
            <p>専門分野はbackend</p>
          </div>
        </div>
      </div>
      <div className="about-contact-title">
        <span>Contact</span>
      </div>
      <div className="about-contact-padding">
        <div className="about-contact-container">
          <a
            href=""
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="about-contact">
              <p>Form</p>
              <div className="about-contact-form" />
            </div>
          </a>
          <a
            href="https://jp.linkedin.com/in/%E5%85%83%E8%B2%B4-%E6%B8%A1%E9%82%89-651775195"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="about-contact">
              <p>LinkedIn</p>
              <div className="about-contact-linkedin" />
            </div>
          </a>
          <a
            href="https://twitter.com/developer_gen"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="about-contact">
              <p>Twitter</p>
              <div className="about-contact-twitter" />
            </div>
          </a>
        </div>
      </div>
    </div >
  );
}

export default About
