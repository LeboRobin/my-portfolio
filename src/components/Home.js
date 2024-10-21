import React from 'react';
import './Home.css';
import imglebo from '../assets/imglebo.jpg';

function Home() {
  return (
    <section className="home">
      <h2>Hi, I'm Lebogang Raphela</h2>
      <img src={imglebo} alt="Profile" />
      <p>I am a Software Developer</p>
      <button>
        <a href="#projects" className="scroll-link">Check My Work</a>
      </button>
    </section>
  );
}

export default Home;
