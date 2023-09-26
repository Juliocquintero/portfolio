import { useContext } from "react";
import DataContext from "../../context/dataProvider";
import { HeroWrapper, SubTitle, Title } from "./styles";

const Hero = () => {
  const { hero, language } = useContext(DataContext);

  return (
    <HeroWrapper>
      <Title>{hero[language]?.title}</Title>
      <SubTitle>{hero[language]?.subTitle}</SubTitle>
    </HeroWrapper>
  );
};

export default Hero;
