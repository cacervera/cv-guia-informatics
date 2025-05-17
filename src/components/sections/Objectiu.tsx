import React from 'react';
import '../../styles/Section.css';

const Objectiu: React.FC = () => {
  return (
    <section className="section" id="objectiu">
      <div className="container">
        <h2 className="section-title">Per què un CV per a informàtics?</h2>
        <div className="section-content">
          <p className="section-text">
            L'alta digitalització i transformació tecnològica del mercat laboral obliga els professionals d'informàtica a actualitzar contínuament les seves competències. Segons el World Economic Forum, cap al 2025 fins a 97 milions de nous llocs de treball requeriran habilitats digitals específiques. En aquest context, un currículum clar i personalitzat és essencial per destacar en un sector competitiu i en ràpida evolució. A més, les empreses i els sistemes de selecció automàtics (ATS) cada cop perfeccionen més els seus filtres de recerca de talent. Per tant, un CV optimitzat ajuda el candidat a aparèixer als filtres de cerca i a mostrar les seves habilitats rellevants al mercat tecnològic.
          </p>
          <ul className="feature-list">
            <li>Les tendències actuals del sector tecnològic</li>
            <li>Les expectatives dels reclutadors</li>
            <li>L'optimització per sistemes ATS</li>
            <li>Les millors pràctiques en disseny i estructura</li>
          </ul>
          <div className="section-cta">
            <a href="#contingut" className="cta-button primary">
              Veure Contingut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectiu; 