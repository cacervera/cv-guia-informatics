import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-pro">
      <div className="header-pro-container">
        <Link to="" className="logo-pro" onClick={() => scrollToSection('hero')}>
          <span className="logo-dot">●</span> CV Guia Informàtica
        </Link>
        
        <nav className="nav-pro">
        <a href="#hero" className="nav-pro-link">Inici</a>
        <a href="#objectiu" className="nav-pro-link">Objectiu</a>
        <a href="#contingut" className="nav-pro-link">Contingut</a>
        <a href="#males-practiques" className="nav-pro-link">Males Practiques</a>
        <a href="#bones-practiques" className="nav-pro-link">Bones Practiques</a>
        <a href="#ats" className="nav-pro-link">ATS</a>
        <a href="#plantilles" className="nav-pro-link">Plantilles</a>
        
        </nav>
      </div>
    </header>
  );
};

export default Header; 