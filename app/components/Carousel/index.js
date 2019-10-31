/**
 *
 * Carousel
 *
 */

import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { CarouselHome } from '../../data/home';

import './slick.css';
import './slick-theme.css';

import { ItemSlider, Img } from './styledComponents';

function Carousel() {
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <button type="button" {...props}>
      {children}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nav: true,
    nextArrow: (
      <SlickButtonFix>
        <FontAwesomeIcon className="next" icon={faChevronRight} />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <FontAwesomeIcon className="prev" icon={faChevronLeft} />
      </SlickButtonFix>
    ),
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

Carousel.propTypes = {
  currentSlide: PropTypes.func.isRequired,
  slideCount: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Carousel;
