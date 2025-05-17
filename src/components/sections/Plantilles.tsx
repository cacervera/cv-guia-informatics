import React, { useState } from 'react';
import '../../styles/Section.css';

type Template = {
  title: string;
  description: string;
  link: string;
  preview: string;
  image: string;
};

const Plantilles: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const overleafTemplates: Record<string, Template> = {
    basica: {
      title: "Plantilla Bàsica",
      description: "Disseny net i professional amb format estàndard i fàcil de llegir.",
      link: "https://es.overleaf.com/latex/templates/tex-curriculum-vitae/jbchmrjtdmzv",
      preview: "https://es.overleaf.com/latex/templates/tex-curriculum-vitae/jbchmrjtdmzv/preview",
      image: process.env.PUBLIC_URL + "/images/basica.png"
    },
    tecnica: {
      title: "Plantilla Tècnica",
      description: "Disseny optimitzat per perfils tècnics i desenvolupadors.",
      link: "https://es.overleaf.com/latex/templates/tech-resume/trwtkjyhyyrh",
      preview: "https://es.overleaf.com/latex/templates/tech-resume/trwtkjyhyyrh/preview",
      image: process.env.PUBLIC_URL + "/images/tecnica.png"
    },
    creativa: {
      title: "Plantilla Creativa",
      description: "Disseny modern i innovador amb elements gràfics atractius.",
      link: "https://es.overleaf.com/latex/templates/altacv-template/trgqjpwnmtgv",
      preview: "https://es.overleaf.com/latex/templates/altacv-template/trgqjpwnmtgv/preview",
      image: process.env.PUBLIC_URL + "/images/creativa.png"
    }
  };

  const canvaTemplates: Record<string, Template> = {
    minimalista: {
      title: "Plantilla Minimalista",
      description: "Disseny net i minimalista per destacar informació clau.",
      link: "https://www.canva.com/templates/EAFRuCp3DcY-black-white-minimalist-cv-resume/",
      preview: "https://www.canva.com/design/DAFRuCp3DcY/view",
      image: process.env.PUBLIC_URL + "/images/Minimalista.png"
    },
    professional: {
      title: "Plantilla Professional",
      description: "Elegant i formal, ideal per a perfils corporatius.",
      link: "https://www.canva.com/templates/EAGQUnFrIZI-science-and-engineering-resume-in-white-black-simple-style/",

      preview: "https://www.canva.com/design/DAFszEvkM50/view",
      image: process.env.PUBLIC_URL + "/images/Professional.png"
    },
    creativa: {
      title: "Plantilla Creativa (Canva)",
      description: "Amb elements visuals moderns per perfils creatius.",
      link: "https://www.canva.com/templates/EAFszEvkM50-simple-professional-cv-resume/",

      preview: "https://www.canva.com/design/DAGQUnFrIZI/view",
      image: process.env.PUBLIC_URL + "/images/CreativaCanva.png"
    }
  };

  const renderTemplates = (templates: Record<string, Template>) => (
    <div className="template-showcase">
      {Object.entries(templates).map(([key, template]) => (
        <div key={key} className="template-card">
          <div className="template-image" onClick={() => setModalImage(template.image)}>
            <img src={template.image} alt={template.title} />
          </div>
          <div className="template-info">
            <h3 className="card-title">{template.title}</h3>
            <p className="card-text">{template.description}</p>
            <div className="template-actions">
              <a href={template.link} target="_blank" rel="noopener noreferrer" className="template-link">
                Veure Plantilla
              </a>
              <button className="template-link" onClick={() => setModalImage(template.image)}>
                Vista Prèvia
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="section" id="plantilles">
      <div className="container">
        <h2 className="section-title">Plantilles</h2>

        <h3 className="section-subtitle">Plantilles Overleaf</h3>
        <div className="section-content">
          <p>
            Les plantilles de CV són una eina fonamental per crear un currículum professional i atractiu. 
            A continuació, et presentem una selecció de plantilles específiques per a perfils d'informàtica.
          </p>
          {renderTemplates(overleafTemplates)}
        </div>

        <h3 className="section-subtitle">Plantilles Canva</h3>
        <div className="section-content">
          <p>
            Canva ofereix plantilles modernes i fàcils d'editar per a la creació de CVs visuals i professionals.
          </p>
          {renderTemplates(canvaTemplates)}
        </div>

        <div className="section-cta">
          <a href="#hero" className="cta-button primary">Tornar a l'inici</a>
        </div>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setModalImage(null)} aria-label="Tancar vista prèvia">
              &times;
            </button>
            <img src={modalImage} alt="Vista prèvia" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Plantilles;
