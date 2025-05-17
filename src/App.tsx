import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Objectiu from './components/sections/Objectiu';
import Contingut from './components/sections/Contingut';
import Plantilles from './components/sections/Plantilles';
import ATS from './components/sections/ATS';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Objectiu />
                <Contingut />
                <Plantilles />
                <ATS />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
