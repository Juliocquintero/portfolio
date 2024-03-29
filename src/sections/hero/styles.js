import styled from "styled-components";
import bg from "../../assets/img/BG_Polygon_Luminary.svg";

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  &::before {
    content: "<>";
  }
  &::after {
    content: "</>";
  }
  @media (min-width: 768px) {
    font-size: 5.5rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 4.8rem;
  }
`;

export const Caption = styled.figcaption`
  color: #fafafa;
  font-size: 2rem;
`;
