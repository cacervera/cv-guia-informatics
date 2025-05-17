import React, { useState } from 'react';
import '../../styles/Section.css';
import CVModel from '../3d/CVModel';

const Plantilles: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState('basica');

  const templates = {
    basica: {
      title: "Plantilla Bàsica",
      description: "Disseny net i professional amb format estàndard i fàcil de llegir.",
      link: "https://es.overleaf.com/latex/templates/tex-curriculum-vitae/jbchmrjtdmzv",
      preview: "https://es.overleaf.com/latex/templates/tex-curriculum-vitae/jbchmrjtdmzv/preview"
    },
    tecnica: {
      title: "Plantilla Tècnica",
      description: "Disseny optimitzat per perfils tècnics i desenvolupadors.",
      link: "https://es.overleaf.com/latex/templates/tech-resume/trwtkjyhyyrh",
      preview: "https://es.overleaf.com/latex/templates/tech-resume/trwtkjyhyyrh/preview"
    },
    creativa: {
      title: "Plantilla Creativa",
      description: "Disseny modern i innovador amb elements gràfics atractius.",
      link: "https://es.overleaf.com/latex/templates/altacv-template/trgqjpwnmtgv",
      preview: "https://es.overleaf.com/latex/templates/altacv-template/trgqjpwnmtgv/preview"
    }
  };

  const handleTemplateClick = (template: string) => {
    setActiveTemplate(template);
  };

  return (
    <section className="section" id="plantilles">
      <div className="container">
        <h2 className="section-title">Plantilles Overleaf</h2>
        <div className="section-content">
          <div className="template-showcase">
            <div className="template-preview">
              <CVModel activeTemplate={activeTemplate} />
            </div>
            <div className="template-options">
              {Object.entries(templates).map(([key, template]) => (
                <div 
                  key={key}
                  className={`template-card ${activeTemplate === key ? 'active' : ''}`}
                  onClick={() => handleTemplateClick(key)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && handleTemplateClick(key)}
                >
                  <h3 className="card-title">{template.title}</h3>
                  <p className="card-text">{template.description}</p>
                  <div className="template-actions">
                    <a 
                      href={template.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="template-link"
                    >
                      Veure Plantilla
                    </a>
                    <a 
                      href={template.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="template-link"
                    >
                      Vista Prèvia
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-cta">
            <a href="#ats" className="cta-button primary">
              Optimitzar per ATS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plantilles; 