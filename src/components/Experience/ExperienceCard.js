import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ title, company, location, duration, skills, description, projectTitle, domain, projectLink }) => {
  return (
    <div className="experience-card">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="experience-location">{location}</p>
      <p className="experience-duration">{duration}</p>
      <p className="experience-skills"><strong>Skills:</strong> {skills.join(', ')}</p>
      <ul className="experience-description">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <p className="experience-project">
        <strong>Project:</strong> {projectTitle} ({domain})
        <br />
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </p>
    </div>
  );
};

export default ExperienceCard;
