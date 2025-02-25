// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Welcome to the Learn Japanese Game!</h2>
      <p className="text-xl mb-6">
        Start your journey of learning Japanese with fun and interactive games.
      </p>
      <div className="bg-white text-black py-3 px-6 rounded-lg shadow-lg">
        <p className="font-medium text-lg">
          Ready to begin? Let us dive into learning!
        </p>
      </div>
      <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>

    </div>
  );
};

export default Home;
