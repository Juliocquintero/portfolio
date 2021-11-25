import img from '../../assets/img/hero_img.jpg';
import html from '../../assets/icons/icon_html.svg';
import css from '../../assets/icons/icon_css.svg';
import javascript from '../../assets/icons/icon_javascript.svg';
import react from '../../assets/icons/icon_react.svg';
import redux from '../../assets/icons/icon_redux.svg';
import git from '../../assets/icons/icon_git.svg';
import styled from '../../assets/icons/icon_styled.svg';
import bootstrap from '../../assets/icons/icon_bootstrap.svg';
import { AbotMeWrapper, Description, Icon, Icons, Img, Title } from './styles';

const AboutMe = () => {
  return (
    <AbotMeWrapper id="aboutMe">
      <Title>About Me</Title>
      <Img src={img} alt="Julio Quintero" height="250px" />
      <Description>
        Soy un desarrollador de software, me encanta trabajar de forma proactiva y me gusta
        desafiarme y hacer todo lo posible para mejorarme. Al mismo tiempo, trato de mantenerme al
        día con las tecnologías; Además de esto escribo un código limpio con buenas prácticas. Si
        desconozco alguna tecnología me gusta informarme sobre ella.
      </Description>
      <Icons>
        <Icon src={html} alt="Html" />
        <Icon src={css} alt="Css" />
        <Icon src={javascript} alt="Javascript" />
        <Icon src={react} alt="React.js" />
        <Icon src={redux} alt="Redux" />
        <Icon src={styled} alt="Styled Components" />
        <Icon src={bootstrap} alt="Bootstrap" />
        <Icon src={git} alt="Git" />
      </Icons>
    </AbotMeWrapper>
  );
};

export default AboutMe;
