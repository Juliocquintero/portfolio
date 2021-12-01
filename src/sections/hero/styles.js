import styled from 'styled-components';
import bg from '../../assets/img/BG_Polygon_Luminary.svg';
export const HeroWrapper = styled.section`
  width: 100%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.secondary};
  background-color: ${(props) => props.primary};
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & h2 {
    font-size: 3.5rem;
  }
  & h2::before {
    content: '<>';
  }
  & h2::after {
    content: '</>';
  }
  & h3 {
    font-size: 2.8rem;
    font-weight: 400;
  }
  @media (min-width: 768px) {
    & h2 {
      font-size: 5.5rem;
    }
    & h3 {
      font-size: 4.8rem;
      font-weight: 400;
    }
  }
`;

export const Caption = styled.figcaption`
  color: #fafafa;
  font-size: 2rem;
`;
