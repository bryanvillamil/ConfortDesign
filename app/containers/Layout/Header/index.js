/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import HamburgerMenu from 'react-hamburger-menu';
import ImgLogo from '../../../images/Logo.png';

import {
  ContentHeader,
  HeaderLogo,
  HeaderTopMobile,
  HeaderTitle,
  Hamburger,
  MenuDesktop,
  List,
  Item,
  Link,
} from './styledComponents';

function Header(props) {
  const {
    viewport: { isMobileView },
    pathname,
    OpenMenu,
    handleClick,
    titleHeader,
  } = props;

  const PageHome = pathname === '/';

  return (
    <ContentHeader>
      <HeaderLogo>
        {PageHome ? (
          <img src={ImgLogo} alt="Logo" />
        ) : (
          <a href="/">
            <img src={ImgLogo} alt="Logo" />
          </a>
        )}
      </HeaderLogo>
      {isMobileView ? (
        <HeaderTopMobile>
          {!PageHome ? (
            <HeaderTitle>
              <span>{titleHeader}</span>
            </HeaderTitle>
          ) : (
            ''
          )}

          <Hamburger className={OpenMenu ? 'isOpen' : ''}>
            <HamburgerMenu
              isOpen={OpenMenu}
              menuClicked={handleClick}
              width={24}
              height={17}
              strokeWidth={2}
              rotate={0}
              color="#fff"
              borderRadius={0}
              animationDuration={0.5}
              className="hamburger"
            />
          </Hamburger>
        </HeaderTopMobile>
      ) : (
        <MenuDesktop>
          <List>
            <Item>
              <Link selected={pathname === '/portafolio'} href="/portafolio">
                Portafolio
              </Link>
            </Item>
            <Item>
              <Link selected={pathname === '/our-team'} href="/our-team">
                Our Team
              </Link>
            </Item>
            <Item>
              <Link selected={pathname === '/contact-us'} href="/contact-us">
                Contact Us
              </Link>
            </Item>
          </List>
        </MenuDesktop>
      )}
    </ContentHeader>
  );
}

Header.propTypes = {
  viewport: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  OpenMenu: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
