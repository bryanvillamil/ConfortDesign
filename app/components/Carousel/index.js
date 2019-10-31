/* eslint-disable react/no-array-index-key */
/**
 *
 * Carousel
 *
 */

import React from 'react';
import 'react-animated-slider/build/horizontal.css';

import { carouselHome } from '../../data/home';

import './slider-animations.css';
import './styles.css';

import { ContentSlider } from './styledComponents';

function Carousel() {
  return (
    <ContentSlider autoplay={5000}>
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

Carousel.propTypes = {};

export default Carousel;
