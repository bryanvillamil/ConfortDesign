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

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Carousel from '../../components/Carousel';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { PageHome, ContentCarousel, Diagonal } from './styledComponents';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  console.log('props', props);

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

export default compose(withConnect)(HomePage);
