import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const GeneralContainer = styled.div`
  width: 100%;
  height: 100%;
  &.MenuIsOpen {
    overflow: hidden;
  }
`;

export const Content = styled.div`
  display: flex;
  height: auto;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  ${breakpoint('md')`
    ${'' /* height: 100%; */}
    min-height: 100vh;
  `}
  ${breakpoint('lg')`
    ${'' /* height: calc(100% - 12rem); */}
  `}
`;

export const MenuMobile = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100%;
  background: -moz-linear-gradient(
    bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.9) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.9) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  transition: -webkit-transform 300ms;
  transition: transform 300ms;
  transition: transform 300ms, -webkit-transform 300ms;
  top: 0;
  z-index: 99;
  position: fixed;
  &.MenuIsOpen {
    -webkit-transform: none;
    transform: none;
  }
`;

export const ListMobile = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0 6rem;
  align-content: space-around;
  height: 90%;
  margin: auto;
  ${breakpoint('sm')`
    height: 95%;
    padding: 5rem 0 2rem;
  `}
`;

export const ItemMobile = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &.advisor {
    a {
      background: red;
      color: #000;
      font-family: 'Frut Light';
      padding: 2.4rem 8rem;
      transition: all 0.5s;
      &:after {
        content: none;
      }
      &:hover {
        background: #c38b1b;
      }
    }
  }
  ${breakpoint('sm')`
    &.advisor {
      a {
        padding: 2rem 6rem;
      }
    }
  `}
`;

export const LinkMobile = styled.a`
  cursor: pointer;
  font-size: 1.8rem;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  color: ${props => (props.selected ? `red` : `#fff`)};
  &:after {
    content: '';
    display: flex;
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    right: 0;
    height: 1px;
    width: 85%;
    margin: 0 auto;
    background: blue;
  }
  ${breakpoint('sm')`
    font-size: 1.6rem;
  `}
`;
