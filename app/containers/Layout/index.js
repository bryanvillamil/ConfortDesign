/* eslint-disable import/named */
/**
 *
 * Layout
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import withViewportHandler from '../../components/WithViewportHandler';
import makeSelectLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from './Header';
import Footer from './Footer';

import {
  GeneralContainer,
  Content,
  MenuMobile,
  ListMobile,
  ItemMobile,
  LinkMobile,
} from './styledComponents';

export function Layout(props) {
  useInjectReducer({ key: 'layout', reducer });
  useInjectSaga({ key: 'layout', saga });

  const [Open, setOpen] = useState(false);

  const { viewport, pathname, title } = props;

  const handleClick = () => {
    setOpen(!Open);
  };

  return (
    <GeneralContainer className={Open ? 'MenuIsOpen' : ''}>
      <Header
        viewport={viewport}
        handleClick={handleClick}
        Open={Open}
        pathname={pathname}
        titleHeader={title}
      />
      <Content>{props.children}</Content>
      <Footer />

      <MenuMobile className={Open ? 'MenuIsOpen' : ''} id="menuMobile">
        <ListMobile>
          <ItemMobile>
            <LinkMobile
              selected={pathname === '/who-we-are'}
              href="/who-we-are"
            >
              Who We Are
            </LinkMobile>
          </ItemMobile>
          <ItemMobile>
            <LinkMobile selected={pathname === '/our-team'} href="/our-team">
              Our Team
            </LinkMobile>
          </ItemMobile>
          <ItemMobile>
            <LinkMobile
              selected={pathname === '/contact-us'}
              href="/contact-us"
            >
              Contact Us
            </LinkMobile>
          </ItemMobile>
        </ListMobile>
      </MenuMobile>
    </GeneralContainer>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  viewport: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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

export default compose(withConnect)(withViewportHandler(injectIntl(Layout)));
