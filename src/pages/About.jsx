import React from 'react';
import './../App.css';
import Header from './Header';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const About = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 400, friction: 10 } }))

  return (
    <div>
      <Header />
      <div className="about-title">About Me</div>
      <div className="about-main-padding">
        <div className="about-main-container">
          <div className="about-main-image-parent">
            <animated.div
              className="about-main-image"
              onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />
          </div>
          <div className="about-main-title">Developer Genki</div>
          <div className="about-main-text">
            <p>専門分野はbackend</p>
            <p>趣味：開発・スケッチ・釣り・ゲーム etc...</p>
            <p>最近の趣味は風景のスケッチ</p>
            <p>欲しいものはブログを書く文章力とデザインセンス</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default About
