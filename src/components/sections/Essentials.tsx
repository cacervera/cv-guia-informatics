import React from 'react';
import '../../styles/Essentials.css';

const Essentials: React.FC = () => {
  return (
    <section className="section" id="essentials">
      <div className="container">
        <h2 className="section-title">Parts Essencials del Currículum IT</h2>
        <p className="section-intro">
          Parts essencials d'un currículum.
        </p>

        {/* Header */}
        <div className="essential-card">
          <h3 className="essential-title">🔹 Header</h3>
          <p><strong>Inclou:</strong> Nom complet | Correu professional | LinkedIn | Telèfon | GitHub</p>
          <p className="tip">Evita adreces postals, DNI, o fotos si no són necessàries.</p>
        </div>

        {/* Perfil Professional */}
        <div className="essential-card">
          <h3 className="essential-title">🔹 Perfil Professional</h3>
          <div className="example good">
            ✅ <strong>Exemple bo:</strong><br/>
            "Enginyer de Software amb 3+ anys d'experiència desenvolupant aplicacions web escalables amb React i Node.js. Apassionat per la qualitat del codi i les metodologies Agile."
          </div>
          <div className="example bad">
            ❌ <strong>Exemple dolent:</strong><br/>
            "Persona treballadora, amb ganes d’aprendre, responsable."
          </div>
        </div>

        {/* Experiència Laboral */}
        <div className="essential-card">
          <h3 className="essential-title">🔹 Experiència Laboral</h3>
          <p><strong>Estructura:</strong> Empresa | Data | Rol | Projectes destacats | Resultats mesurables</p>
          <div className="example good">
            ✅ <strong>Exemple:</strong><br/>
            "Implementació de microserveis amb Docker i Kubernetes, reduint el temps de desplegament un 40%."
          </div>
        </div>

        {/* Skills Tècniques */}
        <div className="essential-card">
          <h3 className="essential-title">🔹 Skills Tècniques</h3>
          <p><strong>Llenguatges:</strong> Python, JavaScript, SQL</p>
          <p><strong>Frameworks:</strong> React, Django</p>
          <p><strong>Eines:</strong> Git, Docker, Jenkins</p>
          <p><strong>Metodologies:</strong> Agile, Scrum, Kanban</p>
            <p className="tip">Les metodologies de treball en equip com Agile o Scrum són molt valorades per les empreses, especialment en entorns col·laboratius i projectes iteratius.</p>

        </div>

        {/* Educació */}
        <div className="essential-card">
          <h3 className="essential-title">🔹 Educació</h3>
          <p>Grau en Enginyeria Informàtica (UPC, 2023)</p>
          <p>Certificacions (ex: AWS Cloud Practitioner)</p>
        </div>

        {/* Portafoli */}
        <div className="essential-card">
          <h3 className="essential-title">🔹 Portafoli / GitHub</h3>
          <p><a href="https://github.com/elnomdusuari" target="_blank" rel="noopener noreferrer">https://github.com/elnomdusuari</a></p>
          <p><a href="https://miportafoli.dev" target="_blank" rel="noopener noreferrer">https://miportafoli.dev</a></p>
        </div>

        
      </div>
    </section>
  );
};

export default Essentials;
