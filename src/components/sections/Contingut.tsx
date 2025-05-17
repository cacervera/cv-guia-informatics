import React from 'react';
import '../../styles/Section.css';

const Contingut: React.FC = () => {
  return (
    <section className="section" id="contingut">
      <div className="container">
        <h2 className="section-title">Estructura d'un CV efectiu</h2>
        <div className="section-content">
          <div className="content-grid">
            <div className="content-card">
              <h3 className="card-title">Format cronològic vs. funcional</h3>
              <p className="card-text">
                El CV pot organitzar-se en format cronològic invers (experiència més recent primer) o funcional (per habilitats o blocs temàtics). El format cronològic és el més comú quan es vol destacar l'evolució de càrrecs recents, mentre que el funcional serveix per ressaltar habilitats claus quan hi ha canvis freqüents de rol. Tria el que millor posi en valor el teu perfil.
              </p>
            </div>
            <div className="content-card">
              <h3 className="card-title">Seccions clau</h3>
              <p className="card-text">
                Un CV d'informàtica típic inclou: (1) Dades personals, (2) Perfil o resum professional, (3) Experiència laboral, (4) Educació/Formació, (5) Habilitats tècniques, (6) Projectes destacats. També pots afegir idiomes, activitats, links a portafolis o repositoris de codi, etc. Utilitza encapçalaments clars i estructura la informació de manera que sigui fàcil de llegir i captar per sistemes ATS.
              </p>
            </div>
            <div className="content-card">
              <h3 className="card-title">Competències destacades</h3>
              <p className="card-text">
                <b>Habilitats tècniques:</b> Programació (Python, Java, C++), bases de dades (MySQL, SQL, NoSQL), desenvolupament web (HTML, CSS, JavaScript), sistemes Linux/Windows, control de versions (Git), cloud (AWS, Azure, Google Cloud), ciberseguretat, frameworks i eines (Docker, Kubernetes, TensorFlow), certificacions (AWS Certified, etc.).<br /><br />
                <b>Habilitats transversals:</b> Treball en equip, resolució de problemes, adaptabilitat, comunicació clara, gestió del temps, lideratge. Selecciona les que millor encaixin amb el rol i l'empresa.
              </p>
            </div>
            <div className="content-card">
              <h3 className="card-title">Plantilles Overleaf recomanades</h3>
              <p className="card-text">
                Per a usuaris de LaTeX, Overleaf ofereix plantilles excel·lents com Simple-CV (bàsic i minimalista) o CS/IT/SWE Resume (per a desenvolupadors i enginyers). Aquestes plantilles ja integren un format clar i totes les seccions típiques, facilitant la creació d'un currículum professional.
              </p>
            </div>
          </div>
          <div className="section-cta">
            <a href="#plantilles" className="cta-button primary">
              Veure Plantilles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contingut; 