import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  ${'' /* border: 2px solid #000000; */}
  width: 6rem;
  height: 4rem;
  cursor: pointer;
  position: relative;
  outline: none;
  z-index: 999;
  border-radius: 5px;
  background-color: ${(props) => (props.darkIsActive ? '#111827' : '#fafafa')};
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    width: 5rem;
    height: 2.5rem;
  }
`;

export const ButtonInner = styled.button`
  background-color: silver;
  border-radius: 3px;
  border: none;
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  bottom: 0;
  cursor: pointer;
  outline: none;
  left: ${(props) => (props.darkIsActive ? '0' : '50%')};
  transition: all 0.2s ease-in-out;
  & i {
    font-size: 1.5rem;
    color: ${(props) => (props.darkIsActive ? '#111827' : '#f5f500')};
    cursor: pointer;
  }
`;
