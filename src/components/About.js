
import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
      "I'm a dedicated college student with a passion for web development, proficient in HTML, CSS, and JavaScript. 
      I enjoy building dynamic websites and applications using Node.js and Express, and I have experience 
      working with MySQL for database management. Always eager to learn, I'm constantly exploring new ways to improve
       my coding skills and create impactful projects."
      </p>
      <h2>Education</h2>
      <div className="education">
      <div className="branch">
        <span className="brname">B.Tech in Computer Science and Engineering</span>
        <span className="time">Full Time</span>
      </div>
      <div className="clgname">
        <span className="svvv">SVVV INDORE</span>
       
      </div>
      </div>
    </section>
  );
};

export default About;
