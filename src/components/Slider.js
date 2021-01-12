import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/*  Slider Component
    - Will display its children SliderImgs in a carousel
    - Autoscrolls using the prop intervalSeconds
    - Speed of transition controlled with transitionMs
    - stops autoscroll on hover over image
    - stops autoscroll on hover over navigation arrows -- which prevents autoscroll/manual collision
    - EDGE CASE: if you click forward or backward very quickly, the animation goofs.
*/

const Slider = (props) => {
  const [autoScroll, setAutoScroll] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [margin, setMargin] = useState(100);
  const [transitioning, setTransitioning] = useState(true);

  useEffect(() => {
    if (autoScroll) {
      const timer = setTimeout(() => {
        goForward();
      }, props.intervalSeconds * 1000)
      return () => clearTimeout(timer)
    }
  });

  const getPrevSlideIndex = () => {
    if (currentSlide > 0) {
      return currentSlide - 1;
    } else {
      return props.children.length - 1;
    }
  }

  const getNextSlideIndex = () => {
    if (currentSlide < props.children.length -1) {
      return currentSlide + 1;
    } else {
      return 0;
    }
  }

  const goForward = () => {
    setMargin(200);
    setTimeout(() => {
      setTransitioning(false);
      setMargin(100);
      setCurrentSlide(getNextSlideIndex());
      setTimeout(() => {
        setTransitioning(true);
      }, 50);
    }, props.transitionMs)
  }

  const goBackwards = () => {
    setMargin(0);
    setTimeout(() => {
      setTransitioning(false);
      setMargin(100);
      setCurrentSlide(getPrevSlideIndex()); 
      setTimeout(() => {
        setTransitioning(true);
      }, 50);
    }, props.transitionMs)
  }

  return (
    <div className="slider"
      onMouseEnter={() => {
        setAutoScroll(false);
      }}
      onMouseLeave={() => {
        setAutoScroll(true);
      }}>
      <ul
        className="list-slides"
        style={{
          marginLeft: `-${margin}%`,
          transition: (transitioning) ? `margin ${props.transitionMs}ms` : 'none'
        }}>
        <li>{props.children[getPrevSlideIndex()]}</li>
        <li>{props.children[currentSlide]}</li>
        <li>{props.children[getNextSlideIndex()]}</li>
      </ul>
      <ul className="navigation">
        <li>
          <button onClick={goBackwards}>
            &larr;
          </button>
        </li>
        {
          props.children.map((s, i) => {
            return (
              <li key={i}>
                <button onClick={() => {setCurrentSlide(i)}}>●</button>
              </li>
            );
          })
        }
        <li>
          <button onClick={goForward}>
            &rarr;
          </button>
        </li>
      </ul>
    </div>
  );
};

Slider.propTypes = {
  intervalSeconds: PropTypes.number.isRequired,
  transitionMs: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}

export default Slider;
