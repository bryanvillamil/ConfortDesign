import styled from 'styled-components';
import posed from 'react-pose';
import breakpoint from 'styled-components-breakpoint';
import { centerFlex } from '../../global-styles';

export const ModalFade = styled.div`
  ${centerFlex}
  position: fixed;
  left: 0;
  top: 0;
  &.open {
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const CircleAnimation = posed.div({
  closed: { scale: 0, borderRadius: '50%', transition: { duration: 250 } },
  open: { scale: 1, borderRadius: 0, transition: { duration: 300 } },
});

export const ModalContent = styled(CircleAnimation)`
  background: #333;
  height: 50%;
  width: 85%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99;
  ${breakpoint('md')`
    height: 28rem;
    width: 35rem;
  `}
  ${breakpoint('md')`
    width: 45rem;
  `}
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 3%;
  top: 3%;
  z-index: 9;
  cursor: pointer;
`;
