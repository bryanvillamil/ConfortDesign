import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  background: blue;
  ${breakpoint('md')`
    background: red;
  `}
`;
