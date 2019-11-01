/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
/**
 *
 * Carousel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'react-animated-slider/build/horizontal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { carouselHome } from '../../data/home';
import withViewportHandler from '../withViewportHandler';

import './slider-animations.css';
import './styles.css';

import { ContentSlider } from './styledComponents';

function Carousel(props) {
  const {
    viewport: { isMobileView },
  } = props;

  return (
    <ContentSlider
      autoplay={5000}
      nextButton={
        <FontAwesomeIcon
          size={isMobileView ? '2x' : '3x'}
          icon={faChevronRight}
        />
      }
      previousButton={
        <FontAwesomeIcon
          size={isMobileView ? '2x' : '3x'}
          icon={faChevronLeft}
        />
      }
    >
      {carouselHome.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${item.image}') no-repeat center center`,
          }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a className="button" href={item.url}>
              {item.button}
            </a>
          </div>
        </div>
      ))}
    </ContentSlider>
  );
}

Carousel.propTypes = {
  viewport: PropTypes.object.isRequired,
};

export default withViewportHandler(Carousel);
