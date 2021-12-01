import styled from 'styled-components';

export const AbotMeWrapper = styled.section`
  background-color: #ffffff;
  display: grid;
  grid-template-areas:
    'title'
    'img'
    'description'
    'icons';
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  row-gap: 2rem;
  color: ${(props) => props.secondary};
  background-color: ${(props) => props.primary};
  @media (min-width: 768px) {
    column-gap: 4rem;
    grid-template-areas:
      'title title'
      'description img'
      '. icons';
  }
`;
export const Title = styled.h3`
  grid-area: title;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Img = styled.img`
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: img;
  margin: auto;
`;

export const Description = styled.p`
  grid-area: description;
  text-align: justify;
  font-size: 2rem;
  padding: 2rem;
`;

export const Icons = styled.div`
  grid-area: icons;
`;

export const Icon = styled.img`
  height: 32px;
`;
