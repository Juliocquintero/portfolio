import styled from 'styled-components';

export const AbotMeWrapper = styled.section`
  display: grid;
  grid-template-areas:
    'title'
    'img'
    'description'
    'icons';
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  row-gap: 2rem;
  max-width: 1024px;
  margin: 0 auto;
  @media (min-width: 768px) {
    column-gap: 4rem;
    grid-template-areas:
      'title title'
      'description img'
      '. icons';
    grid-template-columns: 1fr 0.75fr;
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
  box-shadow: 0px 0px 1.5rem #111827;
`;

export const Description = styled.p`
  grid-area: description;
  text-align: start;
  font-size: 2rem;
  padding: 2rem;
`;

export const IconsContainer = styled.div`
  grid-area: icons;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Icon = styled.img`
  height: 32px;
`;
