import { useContext } from 'react';
import ThemeContext from '../../context/themeProvider';
import { ButtonInner, ButtonWrapper } from './styles';

// import './styles.css';

const ThemeButton = () => {
  const { handleTheme, theme } = useContext(ThemeContext);
  const darkIsActive = theme === 'dark';
  return (
    <ButtonWrapper onClick={handleTheme} darkIsActive={darkIsActive}>
      <ButtonInner onClick={handleTheme} darkIsActive={darkIsActive}>
        <i className={darkIsActive ? 'fas fa-moon' : 'fas fa-sun'} />
      </ButtonInner>
    </ButtonWrapper>
  );
};

export default ThemeButton;
