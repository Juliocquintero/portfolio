import styled from 'styled-components';

export const SectionWrapper = styled.section`
  color: ${(props) => props.secondary};
  background-color: ${(props) => props.primary};
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  color: #fafafa;
  padding: 2rem 0;
  color: ${(props) => props.secondary};
  background-color: ${(props) => props.primary};
`;
