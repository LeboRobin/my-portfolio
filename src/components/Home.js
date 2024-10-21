import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported
import './Home.css';
import imglebo from '../assets/imglebo.jpg';

function Home() {
  return (
    <section className="home">
      <h2>Welcome to my Portfolio</h2>
      <h3>Hi, I'm Lebogang Raphela</h3>
      <img src={imglebo} alt="Profile" />
      <p>I am a Software Developer</p>
      <button>
        <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Check My Work</Link>
      </button>
    </section>
  );
}

export default Home;
