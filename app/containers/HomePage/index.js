/**
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { projects } from '../../data/home';

import Carousel from '../../components/Carousel';
import Box from '../../components/Box';
import withViewportHandler from '../../components/withViewportHandler';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import About from './About';

import {
  PageHome,
  ContentCarousel,
  Diagonal,
  ContentProjects,
} from './styledComponents';

export function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  return (
    <PageHome>
      <ContentCarousel>
        <Carousel />
        <Diagonal>
          <svg viewBox="0 0 1920 100" preserveAspectRatio="none">
            <g className="n2-ss-divider-end">
              <polygon
                // fill="#00807d"
                fill="#fff"
                points="1920 -2 1920 100 960 10 0 100 0 -2"
              />
            </g>
          </svg>
        </Diagonal>
      </ContentCarousel>

      <About />

      <ContentProjects>
        {projects.map(e => (
          <Box
            key={e.id}
            name={e.name}
            description={e.description}
            image={e.image}
          />
        ))}
      </ContentProjects>
    </PageHome>
  );
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withViewportHandler(injectIntl(HomePage)));
