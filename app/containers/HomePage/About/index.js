/**
 *
 * Box
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {
  AboutSection,
  AboutContent,
  AboutTitle,
  AboutDescription,
  AboutButton,
  Button,
} from './styledComponents';

function About() {
  return (
    <AboutSection>
      <AboutContent>
        <AboutTitle>
          <h2>About</h2>
          <h3>Us</h3>
        </AboutTitle>
        <AboutDescription>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            mattis mi quis tellus convallis, sit amet aliquet massa ornare. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.{' '}
          </p>
        </AboutDescription>
        <AboutButton>
          <Button href="/">
            Learn More <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </AboutButton>
      </AboutContent>
    </AboutSection>
  );
}

About.propTypes = {};

export default About;
