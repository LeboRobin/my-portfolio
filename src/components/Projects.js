import React from 'react';
import './Projects.css';
import taxi from '../assets/taxi.jpg'; // Add your project images
import food from '../assets/food.jpg';
import img14 from '../assets/img14.jpeg';

function Projects() {
  const projectList = [
    {
      title: 'E-Hailing System',
      description: 'A system that handles ride-booking, fare calculation, and real-time tracking.',
      techStack: 'React.js, Node.js, MySQL',
      githubLink: 'https://github.com/yourusername/e-hailing-system',
      image: taxi
    },
    {
      title: 'Restaurant Website',
      description: 'A user-friendly platform for restaurant orders and menu displays.',
      techStack: 'React.js, Node.js, MySQL',
      githubLink: 'https://github.com/yourusername/restaurant-website',
      image: food
    },
    {
      title: 'Weather Website',
      description: 'A website that shows current weather and forecasts using API integration.',
      techStack: 'React.js, OpenWeatherMap API',
      githubLink: 'https://github.com/yourusername/weather-website',
      image: img14
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small><strong>Tech Stack:</strong> {project.techStack}</small>
            <br />
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
