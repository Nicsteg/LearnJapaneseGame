// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <ul className="flex justify-around">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/about" className="hover:text-gray-300">About</a></li>
        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
