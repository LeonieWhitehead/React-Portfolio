import React from 'react';
import Project from './Project';
import projectData from '../data/projects.json';

const ProjectGallery = () => {
  return (
    <div className="project-gallery">
      {projectData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectGallery;