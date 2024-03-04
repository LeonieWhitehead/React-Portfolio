import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';


const ProjectGallery = ({projects}) => {
  return (
    <div className="project-gallery">
      <h2>Project Gallery</h2>
       {projects && projects.length > 0 ? (
      <Carousel>
      {projects.map((project) => (
        <Carousel.Item key={project.id}>
          <CarouselImage imageSrc={project.image} text={project.title} />
         {/* Additional project details in Carousel.Caption */}
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