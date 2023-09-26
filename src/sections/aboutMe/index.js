import { useContext } from "react";

import img from "../../assets/img/2hero_img2.jpg";
import {
  AbotMeWrapper,
  Description,
  IconsContainer,
  Img,
  Title,
} from "./styles";
import DataContext from "../../context/dataProvider";
import Icon from "../../components/Icon";
import useColors from "../../hooks/useColors";

const AboutMe = () => {
  const { aboutMe, language } = useContext(DataContext);
  const { aboutMeIcons } = aboutMe;
  const { primary, secondary } = useColors();

  return (
    <AbotMeWrapper id="about-me" primary={primary} secondary={secondary}>
      <Title>{aboutMe?.title[language]}</Title>
      <Img src={img} alt="Julio Quintero" height="250px" />
      <Description>{aboutMe?.info[language]}</Description>
      <IconsContainer>
        {aboutMeIcons.map((icon) => (
          <Icon url={icon?.url} icon={icon} key={icon?.name} />
        ))}
      </IconsContainer>
    </AbotMeWrapper>
  );
};

export default AboutMe;
