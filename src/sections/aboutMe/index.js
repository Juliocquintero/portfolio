import img from '../../assets/img/hero_img.jpg';
import { AbotMeWrapper, Description, Icon, Icons, Img, Title } from './styles';
import { useContext } from 'react';
import DataContext from '../../context/dataProvider';
import ThemeContext from '../../context/themeProvider';

const AboutMe = () => {
  const { aboutMe, language } = useContext(DataContext);
  const { aboutMeIcons } = aboutMe;
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;

  return (
    <AbotMeWrapper id="about-me" primary={primary} secondary={secondary}>
      <Title>{aboutMe?.title[language]}</Title>
      <Img src={img} alt="Julio Quintero" height="250px" />
      <Description>{aboutMe?.info[language]}</Description>
      <Icons>
        {aboutMeIcons.map((icon) => (
          <Icon
            src={require(`../../assets/icons/${icon?.src}`)?.default}
            alt={icon?.alt}
            key={icon?.id}
          />
        ))}
      </Icons>
    </AbotMeWrapper>
  );
};

export default AboutMe;
