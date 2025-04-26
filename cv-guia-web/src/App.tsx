import React from 'react';
import { FaCode, FaRobot, FaFileAlt, FaVideo } from 'react-icons/fa';
import styled from 'styled-components';

const App: React.FC = () => {
    return (
        <Wrapper>
            <Header>
                <h1>💼 Guia de Currículum per a Informàtics</h1>
                <p>Una guia moderna per destacar en el sector tecnològic</p>
            </Header>
            <Nav>
                <NavList>
                    <NavItem><a href="#objectiu"><FaCode /> Objectiu</a></NavItem>
                    <NavItem><a href="#competencies"><FaCode /> Competències</a></NavItem>
                    <NavItem><a href="#ats"><FaRobot /> IA i ATS</a></NavItem>
                    <NavItem><a href="#overleaf"><FaFileAlt /> Overleaf</a></NavItem>
                    <NavItem><a href="#video"><FaVideo /> Vídeo</a></NavItem>
                </NavList>
            </Nav>

            <MainContent>
                <Section id="objectiu">
                    <h2>🎯 Objectiu del projecte</h2>
                    <p>Ajudar a crear un currículum professional i efectiu per a informàtics, tenint en compte tendències actuals, plantilles i optimització per IA.</p>
                </Section>

                <Section id="competencies">
                    <h2>🔧 Competències clau</h2>
                    <p>Inclou llenguatges de programació, eines, projectes amb impacte, soft skills, i certificacions com AWS o Google Cloud.</p>
                </Section>

                <Section id="ats">
                    <h2>🤖 Superar filtres d'IA (ATS)</h2>
                    <p>Utilitza paraules clau de l’oferta, estructura clara, evita gràfics complexos i passa el test amb eines com Jobscan.</p>
                </Section>

                <Section id="overleaf">
                    <h2>📄 Plantilles amb Overleaf</h2>
                    <p>Overleaf permet crear currículums en LaTeX amb un acabat professional i ordenat. Recomanem plantilles netes i compatibles amb ATS.</p>
                </Section>

                <Section id="video">
                    <h2>📹 Vídeo explicatiu</h2>
                    <VideoWrapper>
                        <iframe
                            src="https://www.youtube.com/embed/ID_DEL_VIDEO"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </VideoWrapper>
                </Section>
            </MainContent>

            <Footer>
                <p>Creat per [El teu nom] · 2025 · GitHub Pages</p>
            </Footer>
        </Wrapper>
    );
}

export default App;

// Styled Components
const Wrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background: #f4f4f4;
  color: #333;
  margin: 0;
`;

const Header = styled.header`
  background-color: #0d47a1;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
  background-color: #1976d2;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
    }
    &:hover {
      color: #ffeb3b;
    }
  }
`;

const MainContent = styled.main`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  background: white;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  h2 {
    color: #0d47a1;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  iframe {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #e3f2fd;
  color: #555;
  font-size: 0.9rem;
`;
