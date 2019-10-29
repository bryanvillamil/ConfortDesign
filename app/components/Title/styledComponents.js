import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const H1 = styled.h1`
  font-size: 2.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-family: 'Trajan Pro';
  ${breakpoint('lg')`
    font-size: 2.8rem;
  `}
`;
export const H2 = styled.h2`
  font-size: 2.4rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-family: 'Trajan Pro';
  line-height: 1.5;
  ${breakpoint('md')`
    font-size: 2.2rem;
  `}
`;
export const H3 = styled.h3`
  font-size: 1.9rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
  font-family: 'Trajan Pro';
`;
export const H4 = styled.h4`
  font-size: 1.8rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
  font-family: 'Trajan Pro';
`;
export const H5 = styled.h5`
  font-size: 1.7rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
  font-family: 'Trajan Pro';
`;
export const H6 = styled.h6`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Trajan Pro';
`;
