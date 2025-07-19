// src/App.js
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



export default App;





















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