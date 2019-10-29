/**
 *
 * Carousel
 *
 */

import React from 'react';
import Slider from 'react-slick';
// import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import { CarouselHome } from '../../data/home';

import './slick.css';
import './slick-theme.css';

import { ItemSlider, Img } from './styledComponents';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {CarouselHome.map(e => (
        <ItemSlider key={e.id}>
          <Img src={e.image} alt={e.name} />
        </ItemSlider>
      ))}
    </Slider>
  );
}

Carousel.propTypes = {};

export default Carousel;
