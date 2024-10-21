import React from 'react';
import './About.css';
import lebo2 from '../assets/lebo2.jpg';
import LebogangRaphelaCv from '../assets/LebogangRaphelaCv.pdf'; // Import resume file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGit, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';

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

        <h3>Skills</h3>
        <div className="skills-grid"> {/* Updated class name */}
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} size="3x" title="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} size="3x" title="CSS3" />
            <p>CSS3</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJs} size="3x" title="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" title="React" />
            <p>React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" title="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faGit} size="3x" title="Git" />
            <p>Git</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faGithub} size="3x" title="GitHub" />
            <p>GitHub</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faBootstrap} size="3x" title="Bootstrap" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>

      <footer className="about-footer">
        <h3>Resume</h3>
        <a href={LebogangRaphelaCv} download="Lebogang_Raphela_Resume.pdf" className="resume-link">
          Download My Resume
        </a>
      </footer>
    </section>
  );
}

export default About;
