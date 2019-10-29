import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { colors } from '../../../global-styles';

export const ContentFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background: ${colors.black};
  padding: 3rem 4% 1.5rem;
  position: relative;
  z-index: 9;
  ${breakpoint('md')`
    ${'' /* padding: 2.5rem 2rem; */}
    padding: 0 2rem;
    height: 12rem;
  `}
  ${breakpoint('lg')`
    ${'' /* padding: 2.5rem 5rem; */}
    padding: 0 5rem;
  `}
  ${breakpoint('xl')`
    ${'' /* padding: 2.6rem 8rem; */}
    padding: 0 8rem;
  `}
`;

export const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  order: 2;
  padding-top: 3rem;
  ${breakpoint('md')`
    padding-top: 0;
    width: auto;
    order: 1;
    flex-direction: column;
  `}
`;

export const Textinfo = styled.span`
  color: ${colors.white};
  font-family: 'Frut Light';
  font-size: 1.3rem;
  padding-top: 4px;
  ${breakpoint('xs')`
    font-size: 1.4rem;
  `}
  ${breakpoint('md')`
    font-size: 1.3rem;
  `}
`;

export const FooterCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  order: 1;
  border-bottom: 1px solid #fff;
  padding-bottom: 1rem;
  ${breakpoint('md')`
    border-bottom: none;
    width: auto;
    order: 2;
    padding-bottom: 0;
  `}
`;

export const TitleFooter = styled.h2`
  display: flex;
  font-size: 2rem;
  color: ${colors.colorPrimary};
  align-items: center;
  font-family: 'Trajan Pro';
  ${breakpoint('lg')`
    font-size: 2.2rem;
  `}
  ${breakpoint('xl')`
    font-size: 2.3rem;
  `}
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  order: 3;
  padding-top: 2rem;
  ${breakpoint('md')`
    width: auto;
    align-items: flex-end;
    padding-top: 0;
  `}
`;

export const Link = styled.a`
  display: flex;
  color: ${colors.white};
  font-size: 1.5rem;
  padding-top: 2rem;
  transition: all 0.5s;
  &.emailMobile {
    display: flex;
    color: ${colors.colorPrimary};
    text-decoration: none;
  }
  &.emailDesktop {
    display: none;
  }
  &:hover {
    color: ${colors.colorPrimary};
  }
  ${breakpoint('md')`
    font-size: 1.3rem;
    padding-top: 5px;
    text-decoration: none;
    &.emailMobile {
      display: none;
    }
    &.emailDesktop {
      display: flex;
    }
  `}
`;
