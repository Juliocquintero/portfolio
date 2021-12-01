import styled from 'styled-components';

export const ContactWrapper = styled.section`
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.primary};
  color: ${(props) => props.secondary};
  & h3 {
    font-size: 2.5rem;
  }
  & p {
    font-size: 2rem;
  }
`;

export const ContactEmail = styled.div``;
export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.a`
  font-size: 3rem;
  color: #fafafa;
`;

export const SendMailButton = styled.a`
  background-color: ${(props) => `${props.secondary}90`};
  color: ${(props) => props.primary};
  display: inline-block;
  border-radius: 3px;
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
`;
