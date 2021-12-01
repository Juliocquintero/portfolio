import { useContext } from 'react';
import ThemeContext from '../../context/themeProvider';
import { HeroWrapper } from './styles';

const Hero = () => {
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;
  return (
    <HeroWrapper primary={primary} secondary={secondary}>
      <h2>Hola, soy Julio Quintero</h2>
      <h3>React Frontend Developer</h3>
    </HeroWrapper>
  );
};

export default Hero;
