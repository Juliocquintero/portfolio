import styled from "styled-components";

export const IconAnchor = styled.a`
  color: ${(props) => props.secondary};
  font-size: 1rem;
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: center;
  width: max-content;
  & svg {
    transition: transform 250ms linear;
    font-size: 3rem;
  }
  & span {
    opacity: 0;
    transition: opacity 150ms linear;
    position: absolute;
    bottom: 125%;
    width: max-content;
  }
  &:hover svg {
    transform: scale(1.5);
  }
  &:hover span {
    opacity: 1;
  }
`;
