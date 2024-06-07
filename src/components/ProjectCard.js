import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ img, title, description, link, demo }) => {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-card-img" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-links">
          <a href={link} className="project-code-link" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
          <a href={demo} className="project-demo" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
