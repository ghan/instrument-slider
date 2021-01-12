import React from 'react';
import PropTypes from 'prop-types';

/*  SliderImg Component
    - Displays image using the provided url
    - uses background image for better responsive layouts
    - uses role and aria-label for accessibility
*/

const SliderImg = ({ url, label }) => {
  return (
    <div
      className="slider-img"
      style={{
        backgroundImage: `url(${url})`
      }}
      role="img"
      aria-label={label} />
  );
};

SliderImg.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string
}

export default SliderImg;
