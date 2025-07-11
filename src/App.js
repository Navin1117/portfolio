// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    ReactGA.initialize('G-QV5NFJKCM2'); 
  }, []);

  const location = useLocation();

  useEffect(() => {
    // Send page view on route change
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;





















/* // src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
 */