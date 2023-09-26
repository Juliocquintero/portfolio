import styled from 'styled-components';

export const CardWrapper = styled.article`
  width: 100%;
  min-height: 260px;
  min-width: 280px;
  padding: 2rem;
  display: grid;
  row-gap: 2rem;
  transition: all 0.3s ease-in-out;
  ${'' /* background-image: ${(props) =>
    `linear-gradient(
    135deg,
    ${props.primary} 0%,
    ${props.primary}90 70%,
    ${props.primary}50 80%,
    ${props.primary}30 90%,
    ${props.secondary} 100%)`}; */}

  grid-template-areas:
    'title'
    'img'
    'description';
  @media (min-width: 768px) {
    row-gap: 0;
    ${'' /* background-image: ${(props) =>
      props.justify === 'left'
        ? `linear-gradient(
    270deg,
    ${props.primary} 0%,
    ${props.primary}90 70%,
    ${props.primary}80 80%,
    ${props.primary}60 90%,
    ${props.primary}10 100%)`
        : `linear-gradient(
    90deg,
    ${props.primary} 0%,
    ${props.primary}90 60%,
    ${props.primary}60 75%,
    ${props.primary}30 90%,
    ${props.primary}10 100%)`}; */}
    grid-template-areas: ${(props) =>
      props.justify === 'left' ? `'title .' 'description img'` : `'. title' 'img description'`};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`;

export const Title = styled.h3`
  grid-area: title;
  font-size: 2rem;
  color: ${(props) => props.secondary};
`;

export const DescriptionWrapper = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  text-align: justify;
  color: ${(props) => props.secondary};
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Image = styled.img`
  grid-area: img;
  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Button = styled.a`
  transition: all 0.3s ease-in-out;
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
  &:hover {
    background-color: ${(props) => `${props.secondary}`};
  }
`;
