import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #000000;
  & nav {
    width: 100%;
    max-width: 1024px;
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    vertical-align: middle;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    backdrop-filter: blur(3px);
    & nav {
      justify-content: space-between;
    }
  }
`;

export const ButtonMenu = styled.menu`
  font-size: 2rem;
  color: #fafafa;
  & :hover {
    color: #999999;
  }
  & i {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavBar = styled.ul`
  left: ${(props) => (props.active ? '0%' : '-100%')};
  top: 5rem;
  opacity: ${(props) => (props.active ? '100' : '0')};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgba(55, 55, 55, 0.95);
  list-style: none;
  overflow-x: hidden;
  transition: 0.2s;
  text-align: start;
  gap: 1.5rem;
  z-index: 999;
  position: fixed;

  @media (min-width: 768px) {
    position: static;
    background-color: transparent;
    height: 100%;
    opacity: 100;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    padding: 0;
    width: auto;
    & li {
      font-size: 2rem;
    }
  }
`;

export const ListItem = styled.li`
  font-size: 2rem;
  & a {
    display: flex;
    color: #fafafa;
    text-decoration: none;
    align-items: center;
    gap: 1rem;
  }
  & span {
    font-size: 2rem;
    color: #fafafa;
  }
  &:hover {
    background-color: #99999970;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    display: block;
    width: auto;
    /* max-width: 12ch; */
    & a {
      font-size: 1.5rem;
    }
    &:hover {
      background-color: transparent;
    }

    & a {
      display: block;
      text-align: center;
    }
    & a:hover {
      background-color: #99999920;
    }
  }
`;

export const LogoContainer = styled.a`
  width: 32px;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
`;

export const LanguageContainer = styled.li`
  display: flex;
  color: #fafafa;
  gap: 1rem;
  font-size: 3rem;
  justify-self: self-end;
  height: 60%;
  align-items: flex-end;
  & select {
    outline: none;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    width: auto;
    /* max-width: 12ch; */
    & a {
      font-size: 1.5rem;
    }
    & span {
      display: none;
    }
    &:hover {
      background-color: transparent;
    }
  }
`;

export const Icon = styled.i`
  font-size: 2rem;
  color: #fafafa;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
