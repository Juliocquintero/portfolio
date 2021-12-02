import { useContext } from 'react';
import DataContext from '../../context/dataProvider';
import ThemeContext from '../../context/themeProvider';
import { HeroWrapper } from './styles';

const Hero = () => {
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;
  const { info, language } = useContext(DataContext);
  const { homeTitle } = info;
  return (
    <HeroWrapper primary={primary} secondary={secondary}>
      <h2>{homeTitle[language].title}</h2>
      <h3>{homeTitle[language].subTitle}</h3>
    </HeroWrapper>
  );
};

export default Hero;
