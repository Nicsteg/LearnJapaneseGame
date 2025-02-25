// src/pages/Game.jsx
import React from 'react';
import SentenceDisplay from '../components/SentenceDisplay';

const Game = () => {
  const sentence = "How are you today?";  // Example sentence for translation
  return (
    <div>
      <h2>Translate this sentence to Japanese:</h2>
      <SentenceDisplay sentence={sentence} />
    </div>
  );
};

export default Game;
