/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { Header } from './styledComponents';

export function Layout() {
  useInjectReducer({ key: 'layout', reducer });
  useInjectSaga({ key: 'layout', saga });

  return (
    <Header>
      <FormattedMessage {...messages.header} />
    </Header>
  );
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  layout: makeSelectLayout(),
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

export default compose(withConnect)(Layout);
