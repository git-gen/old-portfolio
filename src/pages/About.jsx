import React from 'react';
import './../App.css';
import Title from '../components/Title';

const About = () => {

  return (
    <div>
      <Title text={'About'} />
      <div className="page-title"><span>About Me</span></div>
      <div className="about-main-padding">
        <div className="about-main-container">
          <div className="about-main-image-parent">
            <div
              className="about-main-image"
            />
          </div>
          <div className="about-main-title">Developer GW</div>
          <div className="about-main-text">
            <p>
              はじめまして！GWです！<br />
              高校・大学で情報工学を学び、<br />
              自社開発を行なっている一部上場企業に新卒入社しました。<br />
              それからWebエンジニアとして働き始め、<br />
              業務では課金機能の実装や機能改修などに携わりました。<br />
              趣味でも開発を行なっていて、<br />
              大学時代はiOS・Androidアプリを作成<br />
              就職後もVPSを借りて複数のWebアプリを作っています。<br />
              バックエンド・フロントエンド・インフラと幅広く触っていますが、<br />
              専門分野はバックエンドエンジニアとしてやらせてもらっています。<br />
            </p>
          </div>
        </div>
      </div>
      <div className="about-contact-title">
        <span>Contact</span>
      </div>
      <div className="about-contact-padding">
        <div className="about-contact-container">
          <a
            href="https://www.yoshinani.com/contact"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="about-contact">
              <p>Form</p>
              <div className="about-contact-form" />
            </div>
          </a>
        </div>
      </div>
    </div >
  );
}

export default About
