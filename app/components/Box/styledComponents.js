import styled from 'styled-components';
import posed from 'react-pose';
import breakpoint from 'styled-components-breakpoint';
import { colors } from '../../global-styles';

export const BoxItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
  position: relative;
  transition: all 0.5s;
  background-position: center;
  background-image: url(${props => `${props.image}`});
  background-size: cover;
  ${breakpoint('sm')`
    width: 50%;
  `}
  ${breakpoint('lg')`
    width: 25%;
  `}
`;

export const BoxPosed = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 0.8 },
});

export const BoxChanges = styled(BoxPosed)`
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: 20rem;
  height: 28rem;
  ${breakpoint('sm')`
    height: 26rem;
  `}
  ${breakpoint('md')`
    height: 28rem;
  `}
  ${breakpoint('lg')`
    height: 25rem;
  `}
  ${breakpoint('xxl')`
    height: 32rem;
  `}
`;

export const BoxImage = styled.div`
  display: flex;
  width: 100%;
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: ${colors.white};
  width: 100%;
  height: 100%;
  top: -101%;
  left: 0;
  transition: all 0.5s;
  padding: 2.5rem 0;
  overflow: hidden;
  ::-webkit-scrollbar {
    width: 3px;
    ${breakpoint('md')`
      width: 5px;
    `}
  }
  ::-webkit-scrollbar-track {
    background: #ddd; 
  }
  ::-webkit-scrollbar-thumb {
    background: #999; 
    border-radius: 50px;
  }
  ${BoxChanges}:hover & {
    top: 0;
  }
  p {
    color: ${colors.black};
    font-family: 'Frut Light';
    font-style: italic;
    font-size: 1.4rem;
    margin: 0;
  }
  ${breakpoint('sm')`
    padding: 8% 5%;
    p {
      font-size: 1.4rem;
    }
  `}
  ${breakpoint('md')`
    padding: 8% 7%;
    p {
      font-size: 1.1rem;
    }
  `}
  ${breakpoint('lg')`
    p {
      font-size: 1.3rem;
    }
  `}
`;

export const DescriptionContainer = styled.div`
  padding: 0 2rem;
  height: 100%;
  overflow-y: auto;
`;

export const BoxText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  margin: 0 auto;
  ${breakpoint('md')`
    padding: 0.5rem;
  `}
`;

export const Name = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  font-size: 1.3rem;
  text-shadow: 1px 1px 3px #333;
  ${breakpoint('md')`
    font-size: 1.2rem;
  `}
`;
