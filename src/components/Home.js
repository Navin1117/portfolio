
import myPhoto from './photo1.png'; 
import React from 'react';
import './home.css'; 


const Home = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:naveendchouhan1117@gmail.com?subject=Hiring Inquiry&body=Hi Naveen, I'd like to discuss a potential hire.";
  };
  return (
    <section className="home">
      <div className="content">
        <h1 className="slide-in" style={{ animationDelay: '0.5s' }}>Hey, I'm </h1>
        <h1 className="slide-in" style={{ animationDelay: '0.8s' }}>
          <span className="gradient-text">Naveen Chouhan</span>
        </h1>
        <h1 className="slide-in" style={{ animationDelay: '1.1s' }}>Full Stack Developer</h1>
        <div className="buttons">
          <button className="slide-in hire-button" style={{ animationDelay: '1.4s' }}  onClick={handleEmailClick}>Hire Me!</button>
          <button className="slide-in resume-button" style={{ animationDelay: '1.4s' }}>View Resume</button>
        </div>
        <div className="social-icons" style={{ animationDelay: '0.5s' }}>
        <a href="https://linkedin.com/in/naveen-chouhan-48075a245" target="_blank" rel="noopener noreferrer" className="slide-in">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/Navin1117" target="_blank" rel="noopener noreferrer" className="slide-in">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="slide-in">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
         
        </div>
      </div>
      <div className="profile-picture">
        <img src={myPhoto} alt="Naveen Chouhan" />
      </div>
    </section>
  );
};

export default Home;


