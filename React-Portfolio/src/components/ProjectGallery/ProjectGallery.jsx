import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import projectsData from '../../projects.json';
import Project from '../Project';


const ProjectGallery = ({projects}) => {
  console.log(projects);
  return (
    <div className="project-gallery">
      <h2>Project Gallery</h2>
       {projects && projects.length > 0 ? (
      <Carousel>
      {projects.map((project) => (
        <Carousel.Item key={project.id}>
          <Link to={`/projects/${project.id}`}>
          <CarouselImage imageSrc={project.image} text={project.title} />
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