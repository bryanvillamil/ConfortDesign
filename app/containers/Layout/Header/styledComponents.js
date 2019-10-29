import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { colors } from '../../../global-styles';

export const ContentHeader = styled.div`
  background: rgba(0,0,0, .9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4%;
  position: absolute;
  z-index: 9;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  ${breakpoint('md')`
    padding: 0rem 2rem;
    background: rgba(0,0,0, .7);
  `}
  ${breakpoint('lg')`
    padding: 0 5rem;
  `}
  ${breakpoint('xl')`
    padding: 0 8rem;
  `}
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  img {
    width: 75%;
    transition: all 0.5s;
  }
  ${breakpoint('lg')`
    img {
      width: 80%;
    }
  `}
`;

export const HeaderTopMobile = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  position: relative;
  right: 3rem;
  span {
    text-transform: uppercase;
    color: ${colors.colorPrimary};
    font-size: 1.4rem;
    font-family: 'Frut Regular';
    letter-spacing: 0.4px;
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  right: 5%;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  & > div {
    cursor: pointer;
  }
`;

export const MenuDesktop = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: flex-end;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1.85rem;
  position: relative;
  &:before {
    content: '';
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 40%;
    width: 1px;
    background: ${colors.white};
  }
  &.itemAdvisor {
    padding: 0;
    &:before {
      content: none;
    }
    a {
      padding: 2.8rem 1.5rem;
      background: ${colors.colorPrimary};
      color: ${colors.black};
      &:hover {
        color: ${colors.black};
        background: #b78012;
      }
    }
  }
  ${breakpoint('lg')`
    padding: 0 1.75rem;
    &.itemAdvisor {
      a {
        padding: 2.7rem 2rem;
      }
    }
  `}
  ${breakpoint('xl')`
    padding: 0 2rem;
  `}
`;

export const Link = styled.a`
  display: flex;
  text-transform: uppercase;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.5s;
  padding: 2.8rem 1.5rem;
  color: ${props =>
    props.selected ? `${colors.colorPrimary}` : `${colors.white}`};
  &:hover {
    color: ${colors.colorPrimary};
  }
  ${breakpoint('md')`
    font-size: 1.1rem;
    letter-spacing: 0.3px;
  `}
  ${breakpoint('xxl')`
    font-size: 1.2rem;
  `}
`;
