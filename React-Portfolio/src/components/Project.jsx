import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ title, deployedLink, githubLink, image }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={image} alt=""/>
      <p>Link: <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Version</a></p>
      <p>GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
    </div>
  );
};

export default Project;