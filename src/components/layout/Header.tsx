import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-pro">
      <div className="header-pro-container">
        <Link to="/" className="logo-pro">
          <span className="logo-dot">●</span> CV Guia Informàtica
        </Link>
        <nav className="nav-pro">
          <Link to="/" className="nav-pro-link">Inici</Link>
          <Link to="/objectiu" className="nav-pro-link">Objectiu</Link>
          <Link to="/contingut" className="nav-pro-link">Contingut</Link>
          <Link to="/plantilles" className="nav-pro-link">Plantilles</Link>
          <Link to="/ats" className="nav-pro-link">ATS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 