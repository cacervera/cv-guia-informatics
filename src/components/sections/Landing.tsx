import React from 'react';
import '../../styles/Landing.css';

const Landing: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1 className="landing-title">CV Guia Informàtica</h1>
        <p className="landing-subtitle">
          La guia essencial per crear un currículum d'informàtica que destaca.
        </p>
        <button className="landing-btn" onClick={onStart}>
          Començar
        </button>
      </div>
    </section>
  );
};

export default Landing; 