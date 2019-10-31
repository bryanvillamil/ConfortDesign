import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const PageHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ContentCarousel = styled.div`
  display: flex;
  height: 60vh;
  width: 100%;
  position: relative;
  ${breakpoint('md')`
    height: 100vh;
  `}
`;

export const Diagonal = styled.div`
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  z-index: 5;
  transform: scaleY(-1);
  ${breakpoint('xs')`
    bottom: -3px;
  `}
  ${breakpoint('sm')`
    bottom: -2px;
  `}
`;
