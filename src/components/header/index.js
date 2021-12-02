import { useContext, useState } from 'react';
import {
  ButtonMenu,
  HeaderContainer,
  LanguageContainer,
  ListItem,
  LogoContainer,
  NavBar,
  Icon,
  Buttons,
} from './styles';
// import logo from '../../assets/icons/jq-logo.png';
import DataContext from '../../context/dataProvider';
import ThemeButton from '../ThemeButton';
import LogoJq from '../Logo';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { menuOpts, language, handleLanguage } = useContext(DataContext);
  const options = menuOpts[language];
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <HeaderContainer>
      <nav>
        <LogoContainer href="#" onClick={() => (menuIsOpen ? handleMenu() : null)}>
          <LogoJq primary={'#fafafa'} secondary={'#000000'} size={32} />
        </LogoContainer>
        <ButtonMenu onClick={handleMenu}>
          <i className={menuIsOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </ButtonMenu>
        <NavBar active={menuIsOpen}>
          {options.map((el) => (
            <ListItem key={el.id}>
              <a href={el.link} onClick={handleMenu}>
                <Icon className={el.icon} />
                {el.name}
              </a>
            </ListItem>
          ))}
          <LanguageContainer>
            <Buttons>
              <select
                onChange={(e) => {
                  handleLanguage(e.target.value);
                }}
              >
                <option value="esp">ESP</option>
                <option value="eng">ENG</option>
              </select>
              <ThemeButton />
            </Buttons>
          </LanguageContainer>
        </NavBar>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
