import React from 'react';
import './../App.css';
import Title from '../components/Title';
import Yoshinani from './../assets/works-yoshinani.jpg';
import TechBlog from './../assets/works-blog.jpg';
import Portfolio from './../assets/works-portfolio.jpg';
import Bbs from './../assets/works-bbs.jpg';
import Application from './../assets/works-application.jpg';

const Works = () => (
  <div>
    <Title text={'Works'} />
    <div className="page-title"><span>Works</span></div>
    <div className="works-main-padding">
      <div className="works-main-container">

        <a
          href="https://www.yoshinani.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="works-main-project">
            <div className="works-main-img">
              <img src={Yoshinani} alt="よしなに" />
            </div>
            <div className="works-main-project-text">
              <h2>
                よしなにトップ
            </h2>
              <p>
                制作物のまとめ用サイト<br />
                他のRailsアプリはこのサイトの一部です
            </p>
              <div className="works-main-project-tag">
                <div>Ruby on Rails</div>
                <div>Nginx</div>
                <div>Puma</div>
                <div>PostgreSQL</div>
                <div>CentOS</div>
                <div>Capistrano</div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://www.yoshinani.com/tech_blogs"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="works-main-project">
            <div className="works-main-img">
              <img src={TechBlog} alt="開発ブログ" />
            </div>
            <div className="works-main-project-text">
              <h2>
                開発ブログ
            </h2>
              <p>
                開発技術のアウトプット用のブログ<br />
                ブログ投稿にはログインが必要です
            </p>
              <div className="works-main-project-tag">
                <div>Ruby on Rails</div>
                <div>Webpacker</div>
                <div>Javascript</div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://www.yoshinani.com/sns_bbs"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="works-main-project">
            <div className="works-main-img">
              <img src={Bbs} alt="SNS掲示板" />
            </div>
            <div className="works-main-project-text">
              <h2>
                SNSフォロワー募集掲示板
            </h2>
              <p>
                7種類のSNSでフォロワーを募集できる掲示板<br />
                匿名で誰でも使用可能です
            </p>
              <div className="works-main-project-tag">
                <div>Ruby on Rails</div>
                <div>Ajax</div>
                <div>Bootstrap</div>
                <div>jQuery</div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://portfolio.yoshinani.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="works-main-project">
            <div className="works-main-img">
              <img src={Portfolio} alt="ポートフォリオ" />
            </div>
            <div className="works-main-project-text">
              <h2>
                Genki's Portfolio
            </h2>
              <p>
                当サイト、私のポートフォリオ<br />
                Reactによって作成してあります
            </p>
              <div className="works-main-project-tag">
                <div>React</div>
                <div>Nginx</div>
                <div>Express</div>
              </div>
            </div>
          </div>
        </a>

        <div className="works-main-project">
          <div className="works-main-img">
            <img src={Application} alt="アプリ" />
          </div>
          <div className="works-main-project-text">
            <h2>
              iOS・Androidアプリ
            </h2>
            <p>
              Unityで作成したiOS/Androidアプリ<br />
              未改修なのでStoreでは一部のみ公開中です
            </p>
            <div className="works-main-project-tag">
              <div>Unity</div>
              <div>C#</div>
              <div>iOS</div>
              <div>Android</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default Works
