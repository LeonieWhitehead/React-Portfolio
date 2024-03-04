import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions';



const CarouselImage = ({ imageSrc, text }) => {

  const source = imageSrc || placeholderImage;
  return (
    <div>
      <img src={imageSrc} alt="{text}" />
      {/* Additional styling or content for Carousel.Image */}
    </div>
  );
};

export default CarouselImage;