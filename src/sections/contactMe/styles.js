import styled from 'styled-components';

export const ContactWrapper = styled.section`
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
`;
export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.a`
  font-size: 3rem;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.primary};
  color: ${(props) => props.secondary};
  &:hover {
    color: ${(props) => `${props.secondary}80`};
  }
`;

export const SendMailButton = styled.a`
  background-color: ${(props) => `${props.secondary}90`};
  color: ${(props) => props.primary};
  transition: all 0.3s ease-in-out;
  display: inline-block;
  border-radius: 3px;
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  &:hover {
    background-color: ${(props) => `${props.secondary}`};
  }
`;
