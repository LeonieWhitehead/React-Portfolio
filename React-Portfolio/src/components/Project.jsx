import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projects.json';
import { Carousel } from 'react-bootstrap';

const Project = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>; // Handle case where project is not found
  }

  const { title, deployedLink, githubLink, image, description } = project;
  
  return (
    <div className="project-details">
      <h2>{title}</h2>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <p>{description}</p>
      <p>
        Link: <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Version</a>
      </p>
      <p>
        GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
};

export default Project;