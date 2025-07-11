
import React from 'react';
import './skills.css'; 
import htmlLogo from './html.png'; 
import cssLogo from './css.png';
import jsLogo from './javascript.png';
import reactLogo from './reactjs.png';
import nodeLogo from './nodejs.png';
import expressLogo from './expressjs.png';
import mongoLogo from './mongodb.png';
import javaLogo from './java.png';
import vscodeLogo from './vscode.png';
import mysqlLogo from './mysql.png';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h1>My Tech Stack</h1>
      <p>Technologies I've been working with recently</p>
      <div className="skills-grid">
        <div className="skill">
          <img src={htmlLogo} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src={cssLogo} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src={jsLogo} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={reactLogo}  alt="React" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={nodeLogo} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <img src={expressLogo} alt="Express.js" />
          <p>Express.js</p>
        </div>
        <div className="skill">
          <img src={mongoLogo} alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <img src={mysqlLogo} style={{height:'90px'}} alt="mySQL" />
          <p>mySQL</p>
        </div>
        <div className="skill">
          <img src={javaLogo} alt="C++" />
          <p>Java</p>
        </div>
        <div className="skill">
          <img src={vscodeLogo} alt="VS Code" />
          <p>VS Code</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
