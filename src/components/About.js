import React from 'react';
import './About.css';
import lebo2 from '../assets/lebo2.jpg';
import LebogangRaphelaCv from '../assets/LebogangRaphelaCv.pdf'; // Import resume file

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={lebo2} alt="About Me" className="about-image" />
        <p>
          I’m a full-stack developer and a recent software development graduate. 
          I specialize in building scalable web applications and enjoy learning new technologies.
        </p>

        <h3>My Skills</h3>
        <ul className="skills-list">
          <li>HTML & CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>Git & GitHub</li>
          <li>RESTful APIs</li>
        </ul>

        <footer className="about-footer">
          <h3>Contact Me</h3>
          <ul className="contact-list">
            <li>Email: <a href="mailto:youremail@example.com">leborobynlr1@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/lebogang-raphela-059168253//" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
            <li>GitHub: <a href="https://github.com/LeboRobin" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
          </ul>

          <h3>Resume</h3>
          <a href={LebogangRaphelaCv} download="Your_Name_Resume.pdf" className="resume-link">
            Download My Resume
          </a>
        </footer>
      </div>
    </section>
  );
}

export default About;
