import { useContext, useState } from 'react';
import {
  ButtonMenu,
  HeaderContainer,
  LanguageContainer,
  ListItem,
  Logo,
  LogoContainer,
  NavBar,
  Icon,
  Buttons,
} from './styles';
// import logo from '../../assets/icons/jq-logo.png';
import logoLight from '../../assets/icons/jq-logo-ligth.png';
import DataContext from '../../context/dataProvider';
import ThemeButton from '../ThemeButton';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { info, language, handleLanguage } = useContext(DataContext);
  const options = info.menuOpts[language];
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <HeaderContainer>
      <nav>
        <LogoContainer href="#" onClick={() => (menuIsOpen ? handleMenu() : null)}>
          <Logo src={logoLight} alt="Julioq logo" style={{ backgroundColor: 'withe' }} />
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
