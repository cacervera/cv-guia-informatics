import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Objectiu from './components/sections/Objectiu';
import Contingut from './components/sections/Contingut';
import ATS from './components/sections/ATS';
import Plantilles from './components/sections/Plantilles';

import BonesPractiques from './components/sections/BonesPractiques';
import MalesPractiques from './components/sections/MalesPractiques';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Objectiu />
          <Contingut />
          <MalesPractiques />
          <BonesPractiques />
          <ATS />
          <Plantilles />
        </main>
      </div>
    </Router>
  );
};

export default App;
