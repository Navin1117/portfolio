import React from 'react';
import './projects.css';
import portfolio from './portfolio1.png';
import lightboxImage from './lightbox.png';
import todoImage from './todo.png';
import weatherImage from './weather.png';

const projects = [
  {
    title: 'Portfolio Website',
    image: portfolio, 
    description: 'Tech Stack: React, CSS, Nodejs, expressjs',
    liveLink: 'https://navin1117.github.io/portfolio/', 
    codeLink: 'https://github.com/Navin1117/portfolio.git', 
  },
  /* {
    title: 'Lightbox Image Gallary',
    image: lightboxImage,
    description: 'Tech Stack: HTML, CSS, Javascript',
    liveLink: 'https://navin1117.github.io/lightbox-gallery/', 
    codeLink: 'https://github.com/Navin1117/lightbox-gallery.git',
  }, */
  {
    title: 'Todo List',
    image: todoImage,
    description: 'Tech Stack: HTML, CSS, Javascript',
    liveLink: 'https://navin1117.github.io/todo/',
    codeLink: 'https://github.com/Navin1117/todo.git',
  },
  {
    title: 'Weather App',
    image: weatherImage, 
    description: 'Tech Stack: HTML, CSS, Javascript',
    liveLink: 'https://navin1117.github.io/weather/',
    codeLink: 'https://github.com/Navin1117/weather.git',
  }
 
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>Projects</h1>
      <p>Things I've built so far</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.liveLink} className="btn">Live Preview</a>
              <a href={project.codeLink} className="btn">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
