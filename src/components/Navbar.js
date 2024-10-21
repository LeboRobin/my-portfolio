import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // You'll add some basic styling later

function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;