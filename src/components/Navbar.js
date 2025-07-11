import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuActive, setMenuActive] = useState(false); 
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
     
      setShowNavbar(false);
     
      setMenuActive(false);
    } else {
      
      setShowNavbar(true);
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <h3><img src={logo} alt="Naveen Chouhan" /></h3>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li><Link to="home" smooth={true} duration={500} offset={-80}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-80}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-80}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500} offset={-80}>Skills</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-80}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
