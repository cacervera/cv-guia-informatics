import React from 'react';
import { LayoutGrid, Type, Search, BarChart2, CheckCircle2, MessageSquare, XCircle } from 'lucide-react';
import '../../styles/Section.css';

const Contingut: React.FC = () => {
  return (
    <section className="section" id="contingut">
      <div className="container">
        <h2 className="section-title">Estructura d'un CV d'Enginyeria Informàtica</h2>
        <p className="section-intro">
          Un currículum efectiu combina disseny net, llegibilitat i contingut rellevant. A continuació, es detallen principis teòrics i pràctics per dissenyar un CV que destaqui davant reclutadors i sistemes ATS.
        </p>

        <div className="content-grid">
          {/* Tipus de format */}
          <div className="content-card">
            <h3 className="card-title">
              <LayoutGrid className="icon" /> Format Cronològic vs Funcional
            </h3>
            <p className="card-text">
              <strong>Cronològic Invers:</strong> Presenta les experiències de forma cronològica inversa, salientant la trajectòria professional.<br />
              <strong>Funcional:</strong> Organitza per blocs de competències, ideal si hi ha canvis constants de rol o per ressaltar habilitats específiques.
            </p>
          </div>

          {/* Seccions Clau */}
          <div className="content-card">
            <h3 className="card-title">
              <Type className="icon" /> Seccions Essencials
            </h3>
            <ul className="card-list">
              <li><strong>Encapçalament:</strong> Nom, títol professional, contacte i enllaços (LinkedIn, GitHub).</li>
              <li><strong>Resum Professional:</strong> 3–4 línies amb valor diferencial i objectiu de carrera.</li>
              <li><strong>Experiència Laboral:</strong> Descripció de rols, tecnologies i resultats quantificats.</li>
              <li><strong>Formació i Certificacions:</strong> Titulacions, cursos online i certificacions rellevants.</li>
              <li><strong>Habilitats Tècniques i Transversals:</strong> Llistat amb classificació per nivell i barres de progrés.</li>
              <li><strong>Projectes i Publicacions:</strong> Enllaços a repositoris, demos, articles o contribucions open source.</li>
            </ul>
          </div>

          {/* Bones pràctiques de disseny */}
          <div className="content-card">
            <h3 className="card-title">
              <BarChart2 className="icon" /> Principis de Disseny i Llegibilitat
            </h3>
            <p className="card-text">
              <strong>Tipografia:</strong> Fonts sans-serif (Arial, Calibri o Roboto) mida 10–12pt per text i 14–16pt per títols. <br/>
              <strong>Marge i Espaiat:</strong> Marges de 1–1.5cm i interlineat 1.15 per millorar la lectura.<br/>
              <strong>Color i Contrast:</strong> Paleta neutra amb un color destacat per títols, assegurant contrast WCAG AA.<br/>
              <strong>Iconografia i Gràfics:</strong> Emprar icones discretes i gràfics de competències per atraure l'atenció mantenint professionalitat.
            </p>
          </div>

          {/* Optimització ATS */}
          <div className="content-card">
            <h3 className="card-title">
              <Search className="icon" /> Optimització per ATS
            </h3>
            <ul className="card-list">
              <li>Paraules clau: incorpora termes de l'oferta de treball (tecnologies, metodologies).</li>
              <li>Format: evita gràfics complexos, capçaleres i peus de pàgina.</li>
              <li>Arxiu: envia sempre en PDF per conservar format i fonts.</li>
              <li>Seccions clares amb encapçalaments estàndard (p.ex. "Experiència", "Formació").</li>
            </ul>
          </div>

          {/* Redacció i to */}
          <div className="content-card">
            <h3 className="card-title">
              <MessageSquare className="icon" /> Redacció i To Professional
            </h3>
            <p className="card-text">
              Utilitza verbs d'acció (Desenvolupat, Liderat, Optimitzat). Siguin concís, evita frases passives i emplea mètriques sempre que sigui possible ("Millora de 25% el rendiment"). Adapta el llenguatge segons l'empresa i el rol per personalitzar cada candidatura.
            </p>
          </div>

          {/* Eines i plataformes recomanades */}
          <div className="content-card">
            <h3 className="card-title">
              <CheckCircle2 className="icon" /> Eines per Millorar el Teu CV
            </h3>
            <ul className="card-list">
              <li>
                <strong>Indeed:</strong> Portal de feina amb milers d'ofertes en el sector IT. Permet pujar el teu CV i aplicar fàcilment.
              </li>
              <li>
                <strong>Jobscan:</strong> Eina per comparar el teu CV amb una oferta concreta i optimitzar-lo per sistemes ATS.
              </li>
            </ul>
            <p className="card-text" style={{ marginTop: '1.5rem' }}>
              La combinació d'aquestes eines pot ajudar-te a crear un CV atractiu, coherent i optimitzat tant per humans com per sistemes automàtics.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Contingut;
