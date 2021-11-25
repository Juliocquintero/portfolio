import { useState } from 'react';
import { ButtonMenu, HeaderContainer, ListItem, NavBar } from './styles';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <HeaderContainer>
      <nav>
        <ButtonMenu onClick={handleMenu}>
          <i className={menuIsOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </ButtonMenu>
        <NavBar active={menuIsOpen}>
          <ListItem>
            <a href="# " onClick={handleMenu}>
              <i className="fas fa-home" />
              Home
            </a>
          </ListItem>

          <ListItem>
            <a href="#aboutMe" onClick={handleMenu}>
              <i className="fas fa-address-card" />
              About Me
            </a>
          </ListItem>
          <ListItem>
            <a href="#projects" onClick={handleMenu}>
              <i className="fas fa-tasks" />
              Projects
            </a>
          </ListItem>
          <ListItem>
            <a href="#contact" onClick={handleMenu}>
              <i className="fas fa-mail-bulk" />
              Contact
            </a>
          </ListItem>
        </NavBar>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
