import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, LayoutList, Activity } from 'lucide-react';
import '../../styles/Section.css';

const goodPractices = [
  {
    icon: <CheckCircle2 className="icon success" />, 
    title: "Mètriques Quantificables",
    example: "Augment del 30% en rendiment de l'aplicació gràcies a optimitzacions en C++",
    description: "Expressa els teus èxits amb xifres concretes per mostrar l'impacte real."
  },
  {
    icon: <Star className="icon accent" />, 
    title: "Verbs d'Acció Potents",
    example: "Desenvolupat, Liderat, Implementat, Automatitzat.",
    description: "Comença cada línia amb un verb que reflecteixi responsabilitat i acció."
  },
  {
    icon: <LayoutList className="icon info" />, 
    title: "Seccions Personalitzades",
    example: "Afegir \"Projectes Open Source\" o \"Conferències\" segons rol.",
    description: "Adapta les seccions al tipus de feina per destacar allò més rellevant."
  },
  {
    icon: <Activity className="icon accent" />, 
    title: "Enllaços Actius",
    example: '<a href="https://github.com/usuari/projecte" target="_blank">Projecte GitHub</a>',
    description: "Inclou hipervincles a portafolis, repositoris o demos per facilitar la revisió."
  }
];

const BonesPractiques: React.FC = () => {
  return (
    <section className="section good-practices" id="bones-practiques">
      <div className="container">
        <h2 className="section-title">Bones Pràctiques en el Currículum</h2>
        <p className="section-intro">
          A continuació, exemples reals de bones pràctiques que poden fer que el teu CV destaqui i transmeti professionalitat i resultat.
        </p>
        <div className="practices-grid">
          {goodPractices.map((item, idx) => (
            <motion.div
              key={idx}
              className="practice-card"
              whileHover={{ translateY: -5 }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="practice-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text"><strong>Exemple:</strong> <span dangerouslySetInnerHTML={{ __html: item.example }} /></p>
              <p className="card-text description">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default BonesPractiques;
