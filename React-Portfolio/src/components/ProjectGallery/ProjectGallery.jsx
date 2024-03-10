import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import projectsData from '../../projects.json';
import Project from '../Project';


const ProjectGallery = () => {
  
  return (
    <div className="project-gallery">
      <h2>Project Gallery</h2>
      {projectsData && projectsData.length > 0 ? (
      <Carousel>
      {projectsData.map((project) => (
        <Carousel.Item key={project.id}>
          <Link to={`/projects/${project.id}`}>
          <img src={project.image} alt={project.title} />
                <Carousel.Caption>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default ProjectGallery;