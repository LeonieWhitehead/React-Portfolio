import React from 'react';

const CarouselImage = ({ imageSrc, text }) => {
  return (
    <div>
      <img src={imageSrc} alt="" />
      {/* Additional styling or content for Carousel.Image */}
    </div>
  );
};

export default CarouselImage;