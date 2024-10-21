import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Importing GitHub icon
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importing LinkedIn icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importing Envelope icon
import './Footer.css'; // Adjust the path if necessary

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/LeboRobin" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="mailto:leborobynlr1@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/lebogang-raphela-059168253/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
