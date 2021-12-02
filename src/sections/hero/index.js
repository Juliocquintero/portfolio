import { useContext } from 'react';
import DataContext from '../../context/dataProvider';
import ThemeContext from '../../context/themeProvider';
import { HeroWrapper, SubTitle, Title } from './styles';

const Hero = () => {
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;
  const { hero, language } = useContext(DataContext);

  return (
    <HeroWrapper primary={primary} secondary={secondary}>
      <Title>{hero[language]?.title}</Title>
      <SubTitle>{hero[language]?.subTitle}</SubTitle>
    </HeroWrapper>
  );
};

export default Hero;
