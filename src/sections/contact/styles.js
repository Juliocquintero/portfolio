import styled from 'styled-components';

export const ContactWrapper = styled.section`
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  & h3 {
    color: #fafafa;
    font-size: 2.5rem;
  }
  & p {
    font-size: 2rem;
    color: #fafafa;
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
  background-color: #fafafa;
  color: #000000;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem;
  font-size: 2rem;
  border-radius: 3px;
  margin-top: 1rem;
`;
