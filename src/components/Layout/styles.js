import styled from "styled-components";

export const MainContainer = styled.main`
  color: ${(props) => props.secondary};
  background-color: ${(props) => props.primary};
  transition: all 0.3s ease-in-out;
`;
