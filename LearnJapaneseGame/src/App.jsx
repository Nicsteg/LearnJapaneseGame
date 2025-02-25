import React, { useState } from 'react';
import SentenceDisplay from './components/SentenceDisplay';
import TranslationInput from './components/TranslationInput';
import ScoreDisplay from './components/ScoreDisplay';

// Sample sentence
const englishSentence = "How are you today?";

const App = () => {
  const [score, setScore] = useState(0);

  // Function to grade the translation
  const gradeTranslation = (userTranslation) => {
    const correctTranslation = "今日は元気ですか?"; // Correct translation
    if (userTranslation === correctTranslation) {
      setScore(score + 1);  // Increment score for a correct answer
    } else {
      alert("Incorrect translation, try again!");
    }
  };

  return (
    <div>
      <SentenceDisplay sentence={englishSentence} />
      <TranslationInput onSubmit={gradeTranslation} />
      <ScoreDisplay score={score} />
    </div>
  );
};

export default App;
