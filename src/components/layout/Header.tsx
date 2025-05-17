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
          <a href="#hero" className="nav-pro-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Inici</a>
          <a href="#objectiu" className="nav-pro-link" onClick={(e) => { e.preventDefault(); scrollToSection('objectiu'); }}>Objectiu</a>
          <a href="#contingut" className="nav-pro-link" onClick={(e) => { e.preventDefault(); scrollToSection('contingut'); }}>Contingut</a>
          <a href="#males-practiques" className="nav-pro-link" onClick={(e) => { e.preventDefault(); scrollToSection('males-practiques'); }}>Males Practiques</a>
          <a href="#bones-practiques" className="nav-pro-link" onClick={(e) => { e.preventDefault(); scrollToSection('bones-practiques'); }}>Bones Practiques</a>
          <a href="#ats" className="nav-pro-link" onClick={(e) => { e.preventDefault(); scrollToSection('ats'); }}>ATS</a>
          <a href="#essentials" className="nav-pro-link" onClick={(e) => { e.preventDefault(); scrollToSection('essentials'); }}>Essencials</a>
          <a href="#plantilles" className="nav-pro-link" onClick={(e) => { e.preventDefault(); scrollToSection('plantilles'); }}>Plantilles</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 