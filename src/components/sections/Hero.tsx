import React from 'react';
import '../../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Guia Completa per Crear un CV Efectiu en Informàtica
        </h1>
        <p className="hero-subtitle">
          Aprèn a destacar les teves competències i passar els filtres d'IA
        </p>
        <div className="hero-cta">
          <a href="#objectiu" className="cta-button primary">
            Començar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 