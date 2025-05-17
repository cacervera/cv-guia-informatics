import React from 'react';
import { motion } from 'framer-motion';
import {
  XSquare,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import '../../styles/Section.css';

const badPractices = [
  {
    icon: <XSquare className="icon error" />, 
    title: 'Sobreinformació Irrellevant',
    error: 'Incloure detalls sobre hobbys o feines no rellevants.',
    solution: 'Focalitza’t en experiències i habilitats específiques al rol visat.',
  },
  {
    icon: <AlertTriangle className="icon warning" />, 
    title: 'Formats Complexos',
    error: 'Ús de taules intricades o gràfics externs que fallen en ATS.',
    solution: 'Optimitza per text pla i encapçalaments estàndard.',
  },
  {
    icon: <XSquare className="icon error" />, 
    title: 'Llenguatge Passiu',
    error: 'Frases com "vaig ser responsable de...".',
    solution: 'Utilitza verbs d’acció directes: "Desenvolupat", "Optimitzat".',
  },
  {
    icon: <AlertTriangle className="icon warning" />, 
    title: 'Falta de Paraules Clau',
    error: 'No incloure termes específics de l’oferta de treball.',
    solution: 'Adapta cada versió del CV amb les tecnologies i metodologies demandades.',
  },
  {
    icon: <XSquare className="icon error" />, 
    title: 'Errors Tipogràfics',
    error: 'Faltes d’ortografia i incoherències d’estil.',
    solution: 'Revisa amb eines d’edició i feedback extern abans d’enviar.',
  },
  {
    icon: <XSquare className="icon error" />, 
    title: 'Habilitats Genèriques',
    error: 'Incloure habilitats massa generals sense context.',
    solution: 'Detalla habilitats específiques i mesurables amb exemples.',
  },
];

const MalesPractiques: React.FC = () => {
  return (
    <section className="section bad-practices" id="males-practiques">
      <div className="container">
        <h2 className="section-title">Males Pràctiques en el Currículum</h2>
        <p className="section-intro">
          Identifica els errors més comuns i aplica solucions pràctiques per millorar la llegibilitat i l’eficiència del teu CV.
        </p>
        <div className="practices-grid">
          {badPractices.map((item, index) => (
            <motion.div
              key={index}
              className="practice-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="practice-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text"><strong>Error:</strong> {item.error}</p>
              <p className="card-text solution">
                <CheckCircle2 className="icon success" /> <strong>Solució:</strong> {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MalesPractiques;
