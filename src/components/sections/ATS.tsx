import React from 'react';
import '../../styles/Section.css';

const ATS: React.FC = () => {
  return (
    <section className="section" id="ats">
      <div className="container">
        <h2 className="section-title">Optimització per ATS i IA</h2>
        <div className="section-content">
          <div className="ats-grid">
            <div className="ats-card">
              <h3 className="card-title">Com funcionen els ATS?</h3>
              <p className="card-text">
                Els sistemes de seguiment de candidats (ATS) i els algorismes d'intel·ligència artificial filtren els CVs de manera automàtica. Per superar el primer tall, és clau incorporar paraules clau rellevants de la descripció de la feina (tecnologies, metodologies, certificacions). Aquestes paraules cal posar-les naturalment en el CV, especialment en el perfil, l'experiència i la secció d'habilitats.
              </p>
            </div>
            <div className="ats-card">
              <h3 className="card-title">Evita errors comuns</h3>
              <p className="card-text">
                Evita gràfics, taules, columnes o icones especials, ja que sovint no es processen correctament. Utilitza tipus de lletra estàndard (Arial, Calibri) i format senzill. Guarda el CV en format .docx o PDF, mai en formats d'imatge. Així garanteixes que l'ATS pugui llegir bé el contingut i identificar les teves habilitats i experiència.
              </p>
            </div>
            <div className="ats-card">
              <h3 className="card-title">Procés de selecció amb IA</h3>
              <p className="card-text">
                Moltes empreses utilitzen sistemes automàtics basats en IA per fer el primer tall de candidats. Aquests sistemes escanegen el currículum i cerquen coincidències de paraules clau i un format adequat. També valoren la claredat de l'estructura i la presència d'assoliments quantificats. Un CV ben optimitzat (sense errors i amb format coherent) augmenta les possibilitats de passar aquesta cribada i arribar a mans del responsable de contractació.
              </p>
            </div>
          </div>
          <div className="section-cta">
            <a href="#objectiu" className="cta-button primary">
              Tornar a l'Inici
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATS; 