// src/App.jsx
import React from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import About from './pages/About';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
