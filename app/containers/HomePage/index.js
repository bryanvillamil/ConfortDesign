/**
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectIntl, intlShape } from 'react-intl';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { projects } from '../../data/home';

import Carousel from '../../components/Carousel';
import Box from '../../components/Box';
import Modal from '../../components/Modal';
import withViewportHandler from '../../components/withViewportHandler';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {
  PageHome,
  ContentCarousel,
  Diagonal,
  ContentProjects,
} from './styledComponents';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const [openButton, setOpenButton] = useState(false);

  const ClickOpenModal = () => {
    setOpenButton(true);
  };

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

      <div style={{ textAlign: 'center', width: '100%' }}>
        <button type="button" onClick={ClickOpenModal}>
          {props.intl.formatMessage(messages.buttonModal)}
        </button>
      </div>

      <Modal openButton={openButton} setOpenButton={setOpenButton} />
    </PageHome>
  );
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
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
