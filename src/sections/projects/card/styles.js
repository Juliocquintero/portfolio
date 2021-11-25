import styled from 'styled-components';

export const CardWrapper = styled.article`
  width: 100%;
  min-height: 260px;
  min-width: 280px;
  padding: 2rem;
  display: grid;
  row-gap: 2rem;
  background-image: ${(props) =>
    `linear-gradient(
    135deg,
    ${props.first} 0%,
    ${props.second} 25%,
    ${props.third} 50%,
    ${props.fourth} 75%,
    ${props.fifth} 100%)`};

  grid-template-areas:
    'title'
    'img'
    'description';
  @media (min-width: 768px) {
    row-gap: 0;
    background-image: ${(props) =>
      props.justify === 'left'
        ? `linear-gradient(
    270deg,
    ${props.first} 0%,
    ${props.second} 25%,
    ${props.third} 50%,
    ${props.fourth} 75%,
    ${props.fifth} 100%)`
        : `linear-gradient(
    90deg,
    ${props.first} 0%,
    ${props.second} 25%,
    ${props.third} 50%,
    ${props.fourth} 75%,
    ${props.fifth} 100%)`};
    grid-template-areas: ${(props) =>
      props.justify === 'left' ? `'title .' 'description img'` : `'. title' 'img description'`};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`;

export const Title = styled.h3`
  grid-area: title;
  font-size: 2rem;
  color: #fafafa;
`;

export const Description = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  & p {
    font-size: 1.5rem;
    text-align: justify;
    color: #fafafa;
  }
  @media (min-width: 768px) {
    & p {
      font-size: 1.8rem;
    }
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
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
  padding: 1rem;
  background-color: #ffffff90;
  border-radius: 0.5rem;
`;
