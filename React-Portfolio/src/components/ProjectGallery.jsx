import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../assets/istockphoto-1147544807-612x612.jpg';


const ProjectGallery = ({projects}) => {
  return (
    <div className="project-gallery">
      <Carousel>
      {projects.map((project) => (
        <Carousel.Item key={project.id}>
          <CarouselImage text={project.title} />
         {/* Additional project details in Carousel.Caption */}
         </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectGallery;