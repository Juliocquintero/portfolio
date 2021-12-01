import img from '../../assets/img/hero_img.jpg';
import { AbotMeWrapper, Description, Icon, Icons, Img, Title } from './styles';
import { useContext } from 'react';
import DataContext from '../../context/dataProvider';
import ThemeContext from '../../context/themeProvider';

const AboutMe = () => {
  const { info, language } = useContext(DataContext);
  const data = info.aboutMe;
  const icons = data.aboutMeIcons;
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;
  return (
    <AbotMeWrapper id="about-me" primary={primary} secondary={secondary}>
      <Title>{data.title[language]}</Title>
      <Img src={img} alt="Julio Quintero" height="250px" />
      <Description>{data.info[language]}</Description>
      <Icons>
        {icons.map((icon) => (
          <Icon
            src={require(`../../assets/icons/${icon.src}`).default}
            alt={icon.alt}
            key={icon.id}
          />
        ))}
        {/* <Icon src={css} alt="Css" />
        <Icon src={javascript} alt="Javascript" />
        <Icon src={react} alt="React.js" />
        <Icon src={redux} alt="Redux" />
        <Icon src={styled} alt="Styled Components" />
        <Icon src={bootstrap} alt="Bootstrap" />
        <Icon src={git} alt="Git" /> */}
      </Icons>
    </AbotMeWrapper>
  );
};

export default AboutMe;
