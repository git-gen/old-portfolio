import React from 'react';
import './../App.css';
import Rating from '../components/Rating';
import Title from '../components/Title';

const Skill = () => (
  <div>
    <Title text={'Skill'} />
    <div className="page-title"><span>Skill</span></div>
    <div className="skill-padding">
      <div className="skill-container">
        <div className="skill-text-container">
          <div className="skill-text-rate">
            <div className="skill-text-star" />
            <div className="skill-text-star" />
            <div className="skill-text-star" />
          </div>
          <div>: 実務経験もあり、熟知している</div>
          <div className="skill-text-rate">
            <div className="skill-text-star" />
            <div className="skill-text-star" />
          </div>
          <div>: 実務経験もあり、ある程度理解している</div>
          <div className="skill-text-rate">
            <div className="skill-text-star" />
          </div>
          <div>: 趣味または実務で少し触った程度</div>
        </div>
        <div className="skill-main-container">
          <div className="skill-main-title"><span>Backend</span></div>
          <div className="skill-main-item">Ruby</div>
          <div className="skill-main-rating"><Rating rate={3} /></div>
          <div className="skill-main-item">Ruby on Rails</div>
          <div className="skill-main-rating"><Rating rate={3} /></div>
          <div className="skill-main-item">Node.js</div>
          <div className="skill-main-rating"><Rating rate={2} /></div>
          <div className="skill-main-item">Golang</div>
          <div className="skill-main-rating"><Rating rate={1} /></div>
          <div className="skill-main-item">C#</div>
          <div className="skill-main-rating"><Rating rate={1} /></div>

          <div className="skill-main-title"><span>Frontend</span></div>
          <div className="skill-main-item">HTML</div>
          <div className="skill-main-rating"><Rating rate={3} /></div>
          <div className="skill-main-item">CSS</div>
          <div className="skill-main-rating"><Rating rate={3} /></div>
          <div className="skill-main-item">JavaScript</div>
          <div className="skill-main-rating"><Rating rate={2} /></div>
          <div className="skill-main-item">TypeScript</div>
          <div className="skill-main-rating"><Rating rate={1} /></div>
          <div className="skill-main-item">React</div>
          <div className="skill-main-rating"><Rating rate={2} /></div>
          <div className="skill-main-item">jQuery</div>
          <div className="skill-main-rating"><Rating rate={3} /></div>
          <div className="skill-main-item">backbone.js</div>
          <div className="skill-main-rating"><Rating rate={2} /></div>

          <div className="skill-main-title"><span>Native App</span></div>
          <div className="skill-main-item">React<br />Native</div>
          <div className="skill-main-rating"><Rating rate={2} /></div>
          <div className="skill-main-item">Android<br />Java</div>
          <div className="skill-main-rating"><Rating rate={1} /></div>

          <div className="skill-main-title"><span>Other</span></div>
          <div className="skill-main-item">PostgreSQL</div>
          <div className="skill-main-rating"><Rating rate={3} /></div>
          <div className="skill-main-item">MySQL</div>
          <div className="skill-main-rating"><Rating rate={2} /></div>
          <div className="skill-main-item">Git</div>
          <div className="skill-main-rating"><Rating rate={3} /></div>
          <div className="skill-main-item">Nginx</div>
          <div className="skill-main-rating"><Rating rate={2} /></div>
          <div className="skill-main-item">EC2・RDS</div>
          <div className="skill-main-rating"><Rating rate={2} /></div>

        </div>
      </div>
    </div>
  </div>
)

export default Skill
