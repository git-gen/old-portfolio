import React from 'react';
import './../App.css';
import Header from '../components/Header';
import Title from '../components/Title';
import TechBlog from './../assets/tech-blog.jpg';

const Works = () => (
  <div>
    <Header />
    <Title text={'Works'} />
    <div className="page-title"><span>Works</span></div>
    <div className="works-main-padding">
      <div className="works-main-container">

        <div className="works-main-project">
          <div className="works-main-project-img">
            <img src={TechBlog} alt="開発ブログ" />
          </div>
          <div className="works-main-project-text">
            <h2>
              よしなにトップ
            </h2>
            <p>
              Ruby on Railsによって動いてる<br />
              アウトプットように使用してます
            </p>
          </div>
        </div>

        <div className="works-main-project">
          <div className="works-main-project-img">
            <img src={TechBlog} alt="開発ブログ" />
          </div>
          <div className="works-main-project-text">
            <h2>
              開発ブログ
            </h2>
            <p>
              Ruby on Railsによって動いてる<br />
              アウトプットように使用してます
            </p>
          </div>
        </div>

        <div className="works-main-project">
          <div className="works-main-project-img">
            <img src={TechBlog} alt="開発ブログ" />
          </div>
          <div className="works-main-project-text">
            <h2>
              ポートフォリオ
            </h2>
            <p>
              Ruby on Railsによって動いてる<br />
              アウトプットように使用してます
            </p>
          </div>
        </div>

        <div className="works-main-project">
          <div className="works-main-project-img">
            <img src={TechBlog} alt="開発ブログ" />
          </div>
          <div className="works-main-project-text">
            <h2>
              SNSフォロワー募集掲示板
            </h2>
            <p>
              Ruby on Railsによって動いてる<br />
              アウトプットように使用してます
            </p>
          </div>
        </div>

        <div className="works-main-project">
          <div className="works-main-project-img">
            <img src={TechBlog} alt="開発ブログ" />
          </div>
          <div className="works-main-project-text">
            <h2>
              Unityアプリ
            </h2>
            <p>
              Ruby on Railsによって動いてる<br />
              アウトプットように使用してます
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default Works
