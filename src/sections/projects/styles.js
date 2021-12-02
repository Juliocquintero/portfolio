import styled from 'styled-components';

export const SectionWrapper = styled.section`
  color: ${(props) => props.secondary};
  background-color: ${(props) => props.primary};
  transition: all 0.3s ease-in-out;
  padding-top: 2rem;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  padding: 2rem 0;
  color: ${(props) => props.secondary};
  background-color: ${(props) => props.primary};
  transition: all 0.3s ease-in-out;
`;
