import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => scrollToSection('hero')}>
          CV Guia
        </Link>
        <div className="nav-links">
          <Link to="#hero" className="nav-link" onClick={() => scrollToSection('hero')}>Inici</Link>
          <Link to="#objectiu" className="nav-link" onClick={() => scrollToSection('objectiu')}>Objectiu</Link>
          <Link to="#contingut" className="nav-link" onClick={() => scrollToSection('contingut')}>Contingut</Link>
          <Link to="#ats" className="nav-link" onClick={() => scrollToSection('ats')}>ATS</Link>
          <Link to="#plantilles" className="nav-link" onClick={() => scrollToSection('plantilles')}>Plantilles</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 