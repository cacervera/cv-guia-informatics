import React from 'react';
import { BarChart2, Target, UserCog, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import '../../styles/Section.css';

const Objectiu: React.FC = () => {
  const features = [
    {
      icon: <UserCog className="icon feature" />, 
      title: 'Requisits de la Indústria',
      description: 'Entén les tecnologies i frameworks més demandats per empreses de TI.'
    },
    {
      icon: <BarChart2 className="icon feature" />, 
      title: 'Tendències del Mercat',
      description: 'Segueix les àrees emergents com IA, DevOps i ciberseguretat.'
    },
    {
      icon: <Zap className="icon feature" />, 
      title: 'Optimització ATS',
      description: 'Aprèn a usar paraules clau i disseny compatible amb escanejats automàtics.'
    },
    {
      icon: <Target className="icon feature" />, 
      title: 'Impacte Visual',
      description: 'Disseny net amb elements visuals que destaquen les teves habilitats.'
    }
  ];

  return (
    <section className="section objective" id="objectiu">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Per què un CV per a Informàtics?
        </motion.h2>
        <motion.p
          className="section-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          En un sector en constant evolució, un CV intel·ligent combina contingut rellevant amb un disseny optimitzat per destacar entre reclutadors i sistemes ATS.
        </motion.p>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="feature-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="section-cta">
          <a href="#contingut" className="cta-button primary">
            Vés al contingut
          </a>
        </div>
      </div>
    </section>
  );
};

export default Objectiu;